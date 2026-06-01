# Porch Deployment

This service is managed by Porch.

- Service id: `abbot`
- Domain: `abbot.newtricks.ai`
- Container: `abbot-web`
- Internal port: `80`

Agents should update app build/runtime details in this repo, then use the generated deploy workflow. Host routing, DNS, TLS, and Caddy reloads are owned by `npx @lindale/porch service register --json` on the VPS.

## GitHub Actions Setup

Configure these repository secrets before relying on automatic deploys:

- `PORCH_HOST`
- `PORCH_USER`
- `PORCH_SSH_KEY`

The deploy workflow publishes `ghcr.io/chrisyerga/newtricks-abbot`. Make sure the package is public or the Porch host has credentials to pull it.
