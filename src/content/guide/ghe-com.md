---
title: Know what changes on GHE.com
section: What GHE.com gives you
order: 3
description: Understand the dedicated subdomain, managed identities and feature differences before planning anything else.
verified: "2026-11-12"
checks:
  - question: Can developers keep their personal github.com accounts and use them in the GHE.com enterprise?
    answer: No. GHE.com enterprises use Enterprise Managed Users. Your identity provider creates and controls the accounts, and they are separate from personal github.com accounts.
  - question: You chose the subdomain "acme-trial" when you signed up. Can you rename it to "acme" before go-live?
    answer: No. GitHub's setup docs say the subdomain cannot be changed later. Choose the production name before you start the trial.
  - question: A workflow uses a Marketplace action that calls api.github.com directly. Will it work unchanged?
    answer: Not necessarily. Actions that hard-code api.github.com may fail, because the GHE.com API lives at api.SUBDOMAIN.ghe.com. Test your critical actions during the trial.
sources:
  - https://github.com/enterprise/data-residency
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-github-enterprise-cloud-with-data-residency
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-storage-of-your-data-with-data-residency
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/getting-started-with-data-residency-for-github-enterprise-cloud
  - https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users
  - https://github.blog/changelog/2024-10-29-github-enterprise-cloud-data-residency-in-the-eu-is-generally-available/
  - https://github.blog/changelog/2026-03-31-eu-data-residency-region-expanding-to-include-efta-countries/
  - https://github.blog/changelog/2026-04-01-codespaces-is-now-generally-available-for-github-enterprise-with-data-residency/
---

## What you will learn

- Explain GHE.com in one sentence that a non-engineer will accept.
- Name the three things that change for every user: the address, the account and the feature set.

## The one-sentence version

GitHub describes GHE.com as "a multi-tenant, enterprise SaaS deployment option for GitHub, running on Microsoft Azure" ([data residency](https://github.com/enterprise/data-residency)). It is GitHub Enterprise Cloud, not a self-hosted server. Your enterprise gets its own subdomain, `SUBDOMAIN.ghe.com`, and you choose the region where its data is stored.

The **EU region** has been generally available since [29 October 2024](https://github.blog/changelog/2024-10-29-github-enterprise-cloud-data-residency-in-the-eu-is-generally-available/). The other regions are Australia, the US and Japan. Since 1 May 2026, the EU region has also included Azure infrastructure in Norway and Switzerland, both EFTA countries. It still uses the existing EU locations in France, Sweden, Germany and the Netherlands. GitHub says this [aligns the region with Microsoft's EU Data Boundary](https://github.blog/changelog/2026-03-31-eu-data-residency-region-expanding-to-include-efta-countries/).

<details>
<summary>Why the EFTA expansion matters to your DPO</summary>

Neither country is an EU member state. Norway is in the EEA, where the GDPR applies directly. Switzerland has an EU adequacy decision. The [storage page](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-storage-of-your-data-with-data-residency) now describes the region as "EU (includes Azure regions in EFTA countries, currently Norway and Switzerland)". If an internal policy says "EU member states only", update the policy wording or raise the difference with your account team before you sign.

</details>

## What changes for every user

| | github.com | GHE.com |
| --- | --- | --- |
| Address | `github.com`, `api.github.com` | `SUBDOMAIN.ghe.com`, `api.SUBDOMAIN.ghe.com` |
| Accounts | Personal accounts or managed users | [Enterprise Managed Users](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-github-enterprise-cloud-with-data-residency) only, provisioned from your IdP |
| Public content | Public repositories and gists | Not available (an EMU restriction) |
| Copilot plans | Personal plans, Business and Enterprise | Business or Enterprise only |

**Identity is the biggest change.** Your IdP owns every account. GitHub [supports](https://docs.github.com/en/enterprise-cloud@latest/admin/concepts/identity-and-access-management/enterprise-managed-users) Microsoft Entra ID with OIDC or SAML plus SCIM, and Okta or PingFederate with SAML plus SCIM. Mixing Okta and Entra ID for SSO and SCIM is not supported. With Entra ID, [GitHub recommends OIDC](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/getting-started-with-data-residency-for-github-enterprise-cloud).

## Check the feature differences during the trial

The [feature overview](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency) is the authoritative list. At the review date it said:

- **Currently unavailable:** organization- and enterprise-level dependency insights, macOS runners for Actions, Maven and Gradle for GitHub Packages, GitHub Marketplace, some preview features, and audit log streaming to Amazon S3 with OIDC.
- **Permanently unavailable:** public repositories and gists, and the GitHub Importer.
- **Different:** the container registry is `containers.SUBDOMAIN.ghe.com`. The Actions OIDC issuer is `token.actions.SUBDOMAIN.ghe.com`. Raw files come from `raw.SUBDOMAIN.ghe.com`, and the SSH user is your subdomain. Actions that hard-code `api.github.com` may fail. Migrated web commits can show as "Unverified" because the web-commit signing keys differ.

**Codespaces** became [generally available on GHE.com](https://github.blog/changelog/2026-04-01-codespaces-is-now-generally-available-for-github-enterprise-with-data-residency/) on 1 April 2026, in all four regions. To keep data resident, codespaces must be owned by the organization or enterprise. User-owned codespaces are not supported.

**Guide advice:** treat the feature overview as a checklist, not reading material. During the 30-day trial, list your 20 most important workflows and integrations, run each one, and record pass, fail or workaround. Re-read the page before you sign, because the "currently unavailable" list shrinks over time.

## Worked example: the Marketplace surprise

**Hypothetical scenario:** A payments company runs a trial. The platform team imports three representative repositories and runs their pipelines. Two third-party actions fail because they call `api.github.com`. A third depends on a Marketplace app that cannot be installed.

None of these failures blocks the move, but each needs an owner. The team pins a fork of one action that reads the API URL from the `GITHUB_API_URL` environment variable. It replaces the second action with a script. It asks the app vendor whether the vendor supports GHE.com. Without the trial, these would have been go-live incidents.
