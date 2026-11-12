---
title: Set up, connect and migrate
section: Adopt with confidence
order: 9
description: Stand up the enterprise, connect identity, networks and developer tools, then move repositories in waves with the right tool.
verified: "2026-11-12"
checks:
  - question: You migrate 200 repositories with GitHub Enterprise Importer. Do Actions secrets come across?
    answer: No. GEI does not migrate Actions secrets, variables, environments, runners or run history. Recreate them on GHE.com, ideally from your secrets manager.
  - question: Your firewall team cannot allow a wildcard for blob.core.windows.net. Is GHE.com blocked?
    answer: No. You can retrieve the enterprise-specific storage hostnames with `gh api /meta --hostname SUBDOMAIN.ghe.com --jq '.domains.storage[]'` and allow those instead.
  - question: A large GHES monorepo cannot take a long freeze. Which migration path should you evaluate first?
    answer: Enterprise Live Migrations, generally available since 1 September 2026 for GHES to GHE.com. It is designed for near-zero downtime and moves one repository at a time. Organisation-level data is not included.
sources:
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/getting-started-with-data-residency-for-github-enterprise-cloud
  - https://github.blog/changelog/2025-05-16-github-enterprise-cloud-with-data-residency-now-available-for-self-service-trial/
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/network-details-for-ghecom
  - https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-in-your-ide/set-up-copilot/authenticate-to-ghecom
  - https://docs.github.com/en/enterprise-cloud@latest/github-cli/github-cli/using-multiple-accounts
  - https://docs.github.com/en/enterprise-cloud@latest/migrations/overview/migration-paths-to-github
  - https://docs.github.com/en/enterprise-cloud@latest/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer
  - https://docs.github.com/en/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products
  - https://docs.github.com/en/enterprise-cloud@latest/migrations/elm/about-live-migrations
  - https://github.blog/changelog/2026-09-01-enterprise-live-migrations-from-ghes-to-ghe-com-generally-available/
  - https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise
---

## What you will learn

- Run the setup in the order that avoids permanent mistakes.
- Give network and desktop teams exactly what they need.
- Pick the right migration tool, and know what you must recreate by hand.

## 1. Start the enterprise

A [self-service 30-day trial](https://github.blog/changelog/2025-05-16-github-enterprise-cloud-with-data-residency-now-available-for-self-service-trial/) has been available since May 2025. It allows up to three new organisations. When you [sign up](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/getting-started-with-data-residency-for-github-enterprise-cloud), you choose two things:

- **Data hosting region:** choose **EU**.
- **Subdomain:** this becomes `SUBDOMAIN.ghe.com` and **cannot be changed later**. Use the production name from day one.

Then configure your IdP. With Entra ID, use OIDC, which GitHub recommends. Other IdPs use SAML. Provisioning uses SCIM with a token that has the `scim:enterprise` scope. If one Entra tenant provisions several enterprises, only the first can use OIDC. The others must use SAML.

## 2. Open the network

Send your firewall team the [network details page](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/network-details-for-ghecom) itself, not a copy: the IP ranges change. The page includes:

- **Hostnames:** `*.SUBDOMAIN.ghe.com`, `*.pages.SUBDOMAIN.ghe.com`, `*.actions.SUBDOMAIN.ghe.com`, `*.githubassets.com`, `*.githubusercontent.com`, `*.blob.core.windows.net` and `auth.ghe.com`.
- **EU ingress and egress IP ranges**, for allow-lists and for systems that receive webhooks.
- **Without wildcards:** run `gh api /meta --hostname SUBDOMAIN.ghe.com --jq '.domains.storage[]'` to list your storage hostnames.

## 3. Point every client at GHE.com

Most help-desk tickets in the first week come from clients that still point to `github.com`. Publish this table internally:

| Client | Setting |
| --- | --- |
| Git | Clone from `https://SUBDOMAIN.ghe.com/...`. The SSH user is your subdomain, not `git`. |
| GitHub CLI | Run `gh auth login --hostname SUBDOMAIN.ghe.com`, or set `GH_HOST` ([docs](https://docs.github.com/en/enterprise-cloud@latest/github-cli/github-cli/using-multiple-accounts)). |
| VS Code + Copilot | Set `github-enterprise.uri` to `https://SUBDOMAIN.ghe.com` and `"github.copilot.advanced": { "authProvider": "github-enterprise" }`, then sign in ([docs](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-in-your-ide/set-up-copilot/authenticate-to-ghecom)). |
| JetBrains, Visual Studio, Xcode, Eclipse | Set the enterprise URL or auth provider to your subdomain. JetBrains needs plugin 1.4.11 or later. |
| Copilot CLI | Run `copilot login --host SUBDOMAIN.ghe.com`. |
| GitHub Desktop | Choose **Sign in to GitHub Enterprise** and enter your GHE.com URL. |

**Guide advice:** push these settings through device management (MDM or Intune) where you can. Then enable [audit log streaming](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise) to an EU destination before the first wave. Supported destinations include Azure Blob Storage, Azure Event Hubs, Splunk and Datadog. Streaming to S3 with OIDC is not available on GHE.com.

## 4. Choose the migration tool

| Source | Tool to GHE.com |
| --- | --- |
| github.com, another GHE.com enterprise, GHES 3.4.1+, Azure DevOps Services, Bitbucket Server/Data Center 5.14+, GitLab | [GitHub Enterprise Importer (GEI)](https://docs.github.com/en/enterprise-cloud@latest/migrations/using-github-enterprise-importer/understanding-github-enterprise-importer/about-github-enterprise-importer) |
| GHES, with minimal downtime | [Enterprise Live Migrations](https://docs.github.com/en/enterprise-cloud@latest/migrations/elm/about-live-migrations), [GA since 1 September 2026](https://github.blog/changelog/2026-09-01-enterprise-live-migrations-from-ghes-to-ghe-com-generally-available/) |
| Bitbucket Cloud | Git CLI: source and history only |
| Azure DevOps Server | Move to Azure DevOps Services first, then GEI |

There is no supported path back from GHE.com to github.com with official tools ([migration paths](https://docs.github.com/en/enterprise-cloud@latest/migrations/overview/migration-paths-to-github)). Factor that into your exit plan.

<details>
<summary>What GEI moves, and what you must recreate</summary>

[Between GitHub products](https://docs.github.com/en/enterprise-cloud@latest/migrations/using-github-enterprise-importer/migrating-between-github-products/about-migrations-between-github-products), GEI migrates Git history, pull requests, issues, milestones, wikis, Actions workflow files, commit comments, releases, topics, settings and most branch protections. Webhooks migrate but must be re-enabled.

It does **not** migrate audit logs, code scanning results, Dependabot alerts or secrets, or commit status checks. It also skips Actions secrets, variables, environments, runners and run history. GitHub Apps, Packages, new Projects, rulesets, repository discussions, sub-issues, custom properties, Git LFS objects, stars, watchers, user keys, personal access tokens and team membership must also be recreated.

Keep your source system read-only for the retention period your audit policy requires, because audit logs do not move.

</details>

## 5. Move in waves

**Guide advice, not a GitHub requirement:**

1. **Pilot:** one or two teams, with real pipelines and Copilot enabled under the residency policy. Exit when the client table and network rules work without exceptions.
2. **Waves:** group repositories by team and dependency. Freeze, migrate, recreate secrets, re-enable webhooks and verify a build.
3. **Cutover:** make the source read-only, redirect documentation links and close the old organisations after the retention period.
