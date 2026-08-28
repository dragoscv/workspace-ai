---
paths:
  - "**/*.py"
  - "**/pyproject.toml"
  - "**/requirements*.txt"
  - "**/uv.lock"
  - "**/alembic/**"
---

# Python Services

Applies to FastAPI services and quant/ML code (Python 3.12+, ~440 files across
the repos). The web stack rules do NOT cover these — this is the reference.

## Environment & dependencies

- **Never `pip install` globally.** Every project has its own venv:
  `python -m venv .venv; .\.venv\Scripts\Activate.ps1` (Windows) — activate it
  before running anything, including tests.
- Dependencies are declared in `pyproject.toml` (`[project].dependencies`),
  dev-only in `[project.optional-dependencies].dev`. Never edit a
  `requirements.txt` that is generated.
- Pin a **floor** (`>=`), not an exact version, unless a break forces it.
- `requires-python = ">=3.12"` — do not use syntax older 3.12 can't run, and
  don't add `typing.List`-era imports (use builtin generics).

## FastAPI

- Pydantic **v2** only: `model_validate`, `model_dump`, `Field`,
  `@field_validator`. `.dict()` / `.parse_obj()` are v1 and gone.
- Config via `pydantic-settings` `BaseSettings`, never bare `os.environ` reads
  scattered through modules.
- Validate at the boundary: request/response models on every route. Do not
  return raw dicts or ORM objects.
- `async def` only when the body actually awaits. A sync body in an `async def`
  blocks the event loop — put blocking work in `run_in_threadpool`.
- Long/CPU-bound work (pandas, model training) must NOT run in a request
  handler — schedule it (APScheduler) or push it to a worker.

## Data & DB

- SQLAlchemy **2.0** style: `select()` + `session.execute()`, typed
  `Mapped[...]` models. No legacy `Query` API.
- psycopg 3 with a pool; never open a connection per request by hand.
- Money is never a float — `Decimal` or integer minor units, consistently.
- pandas: avoid `inplace=True` and chained assignment; prefer explicit
  reassignment. Watch dtype coercion silently turning ints into floats on NaN.

## Errors & observability

- Raise `HTTPException` with a specific status; never let a bare exception
  become a 500 with a stack trace in the response.
- Log structured (`extra={...}`), never f-string the payload into the message.
- Sentry is wired via `sentry-sdk[fastapi]` — don't swallow exceptions before
  it sees them.

## Testing

- `pytest`, async tests via `pytest-asyncio`. Tests live next to the code or in
  `tests/`, named `test_*.py`.
- Quant/ML: assert on **properties and bounds**, not exact floats — use
  `pytest.approx`. A backtest test that pins a P&L to 8 decimals is a false
  guarantee.
- Seed every RNG (`numpy.random.default_rng(seed)`); an unseeded test that
  passes today is a flake tomorrow.

## Lint & format

- `ruff` is the only linter/formatter. Run `ruff check --fix` and
  `ruff format`. Do not add black/isort/flake8 alongside it.
- No lint errors in CI.

## Don't

- Don't mix sync and async DB drivers in one service.
- Don't `from module import *`.
- Don't commit notebooks with output cells into the service package.
