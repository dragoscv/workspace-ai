# Security Best Practices

## Input & Output
- Sanitize all user inputs on the server side; client-side validation is supplementary only
- Use parameterized queries or ORM methods; never concatenate user input into SQL
- Encode output to prevent XSS; use framework-provided escaping (React JSX does this by default)
- Validate and sanitize file uploads: check MIME types, file size limits, and store outside webroot
- **Server Actions**: always validate all inputs with Zod at the top of every server action; never trust FormData directly
- **Server Actions**: always check authentication/authorization before performing mutations

## Authentication & Authorization
- Never store passwords in plaintext; use bcrypt/scrypt/argon2 with proper work factors
- Implement CSRF protection on all state-changing endpoints (Server Actions handle this automatically)
- Use `proxy.ts` (not middleware.ts) for route protection in Next.js 16
- Use short-lived JWTs with refresh token rotation; store tokens in httpOnly secure cookies
- Apply rate limiting on authentication endpoints
- Enforce least-privilege access; deny by default

## Infrastructure
- Set security headers: Content-Security-Policy, X-Content-Type-Options, X-Frame-Options, Strict-Transport-Security
- Never expose secrets, API keys, or tokens in client-side code or git history
- Use `.env` files for secrets; ensure `.env` is in `.gitignore`
- Run SAST scanning on every PR; fail on critical/high vulnerabilities
- Run `npm audit` / `pnpm audit` in CI; fail on critical vulnerabilities
- Enable secret scanning in pre-commit hooks
- Never log sensitive data (passwords, tokens, PII)

## OWASP Top 10 Compliance
- Validate all access controls server-side (broken access control)
- Use strong encryption for data at rest and in transit (cryptographic failures)
- Prevent injection attacks: SQL, XSS, command injection, SSRF
- Keep dependencies updated; monitor for known CVEs
