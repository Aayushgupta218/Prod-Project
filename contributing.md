# Working agreement

## Branches and PRs
- `main` is always deployable. No direct pushes.
- Branch names: `feat/...`, `fix/...`, `chore/...`, `docs/...`
- Keep branches short-lived (merge within 1-2 days). Small PRs (under ~400 changed lines).
- Every PR needs 1 approval from the other person and passing CI. Squash merge.

## Commits (Conventional Commits)
`type(scope): summary`, for example `feat(booking): add state transition guard`
Types: feat, fix, chore, docs, refactor, test, ci, build.

## Review rule
The reviewer must be able to explain the change. If you can't, ask until you can.

## Secrets
Never commit secrets. Use `.env` locally (git-ignored) and `.env.example` for placeholders.