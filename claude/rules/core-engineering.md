# Core Engineering Principles

- **Product-first mindset**: start from outcomes (release, rollback, telemetry), not implementation details
- **Contract-first**: define interfaces and API contracts before writing implementation code
- **Small vertical slices**: break work into 2–6 hour deliverable increments that ship end-to-end value
- **DRY**: extract shared logic only when duplication occurs 3+ times; premature abstraction is worse than duplication
- **KISS**: choose the simplest solution that satisfies requirements; avoid clever code
- **YAGNI**: build for current requirements only; do not design for hypothetical future needs
- **SOLID**: apply single responsibility, open/closed, Liskov substitution, interface segregation, and dependency inversion
- **Composition over inheritance**: prefer composing small, focused functions and modules
- **Local-first development**: everything must be runnable locally via scripts; never assume cloud or secrets by default
- **CI target**: keep CI pipeline under 10 minutes; optimize or parallelize when it exceeds this
- **SemVer**: use semantic versioning for all releases; MAJOR.MINOR.PATCH
- **Deployment strategy**: canary → staged → full rollout; always have rollback capability
- **Avoid over-engineering**: the right amount of complexity is the minimum needed for the current task
- **Fail fast**: detect errors early; validate at system boundaries, trust internal code
