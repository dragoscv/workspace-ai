---
paths:
  - "**/*.tf"
  - "**/*.tfvars"
  - "**/infra/**"
  - "**/Pulumi.*.yaml"
---

# Infrastructure as Code

Terraform (google provider) is primary; Pulumi exists in one repo. Cloud
resources cost money and deleting them can be unrecoverable — IaC changes get
the same scrutiny as a DB migration.

## The non-negotiable loop

1. `terraform plan -out=tfplan` — **read the plan**.
2. Confirm the counts: `N to add, M to change, K to destroy`.
3. **Any `destroy` or `replace` on a stateful resource stops the loop** —
   database, bucket, disk, KMS key. Report it and ask before applying.
4. `terraform apply tfplan` — apply the exact plan you read, not a fresh one.
5. Verify the live resource, not the apply output.

Never `apply -auto-approve` against a non-throwaway environment.

## State

- Remote backend (GCS), versioned and locked. Never commit `.tfstate` or
  `.tfstate.backup` — they contain resource attributes and often secrets.
- Never hand-edit state. Use `terraform state mv` / `import` and say what you
  did.
- One state per environment. A shared state across dev/prod is how prod gets
  destroyed by a dev apply.

## Secrets

- Secrets go in Secret Manager and are referenced; they do **not** go in
  `.tf` or `.tfvars`. Anything passed as a Terraform variable lands in state
  in plaintext.
- `.tfvars` with real values stays gitignored; commit a `.tfvars.example`.

## Structure

- Pin provider versions (`required_providers`) and the Terraform version.
- Modules for anything used more than twice; inputs/outputs documented.
- Name resources for the environment: a resource without an env suffix will
  eventually be applied to the wrong project.
- `terraform fmt` and `terraform validate` in CI.

## Drift

- Drift means someone changed things in the console. Investigate **before**
  applying — a plan that "fixes" drift may be reverting a deliberate hotfix.
- Periodically run plan on prod with no changes pending; a clean plan is the
  only proof state matches reality.

## Cost

- State the expected cost delta for anything with a meter (GPU, Cloud SQL tier,
  egress) before applying.
- Destroy scratch environments when done; an orphaned GPU node is silent spend.
