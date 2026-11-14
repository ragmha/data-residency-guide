---
title: Map where your data lives
section: What GHE.com gives you
order: 4
description: Separate what GitHub stores in the EU region from the documented exceptions, then decide which exceptions need a control.
verified: "2026-11-12"
diagram: data-map
checks:
  - question: Your DPO asks whether GitHub will notify you each time data leaves the EU region. What is the answer?
    answer: No. GitHub documents the reasons for transfers out of the region but does not notify you when a transfer happens. Assess the documented categories once, then re-check the page on a schedule.
  - question: An engineer attaches a failing source file to a support ticket. Is that file guaranteed to stay in the EU?
    answer: No. Support requests and case notes are listed as data that may be stored outside the region. Set a rule for what may go into tickets.
  - question: Copilot is enabled with default settings. Are prompts and responses kept in the EU?
    answer: No. Copilot data is stored outside the region by default. Prompts, responses, inference, logs and telemetry stay in-region only after you enable the "Restrict Copilot to data residency compliant models" policy.
sources:
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-storage-of-your-data-with-data-residency
  - https://github.com/customer-terms/github-data-protection-agreement
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/network-details-for-ghecom
---

## What you will learn

- List what GitHub stores in the EU region, using GitHub's own categories.
- Turn each documented exception into an accept, configure or policy decision.
- Explain why your integrations are part of your data perimeter too.

## Stored in the EU region

GitHub's [storage page](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-storage-of-your-data-with-data-residency) puts three categories in-region:

- **Customer content:** repositories, including names and source code; pull requests, comments, file paths, raw URLs and filenames; structured and blob storage.
- **Data or logs that identify your company:** GitHub Actions data and logs, and business continuity and disaster recovery (BCDR) data.
- **Data or logs that identify a person:** email address, username, first and last name, and IP address.

Backups and disaster recovery stay in the region too. For most organisations, this is the core requirement: code, collaboration history and personal data, stored in the EU.

## The documented exceptions, and what to do with each

The same page lists data that GitHub "may store outside your chosen region" for the purposes in the [Data Protection Agreement](https://github.com/customer-terms/github-data-protection-agreement). **Your decision column is guide advice.**

| Category (GitHub's wording) | What it is | Your decision |
| --- | --- | --- |
| Telemetry or logs with consistent identifiers | User IDs or GUIDs, unsalted hashes of email, username, name or IP | **Accept.** Pseudonymous operational data, covered by the DPA. Record it in your transfer assessment. |
| Information to administer a paid plan | Contact, billing, purchase, payment and licence data | **Accept and minimise.** Use a shared billing mailbox rather than a named person where you can. |
| Support and feedback data | Support requests, case notes, calls, chats, remote sessions | **Policy.** No secrets, personal data or regulated code in tickets unless your assessment allows it. |
| GitHub Copilot data | Copilot data and logs, **outside the region by default** | **Configure.** Enable the data-residency policy for Copilot. See [chapter 2.3](/part-2/3-copilot/). |
| Secret scanning data | Validity checks and extended metadata checks, only if you enable them | **Decide.** These checks contact the token issuer. Enable them per repository risk. |
| TLS certificate information | Certificate details sent to certificate authorities and transparency logs | **Accept.** Public by design and limited to your subdomain name. |

Two more sentences matter. First: "GitHub will document reasons for the transfer of data out of your enterprise's region, but does not notify you when transfers occur." Second, data subject requests go to [GitHub Support](https://support.github.com). If one of your data subjects contacts GitHub directly, GitHub redirects them to you.

## Your perimeter includes your integrations

Residency describes where **GitHub** stores data. Data you send elsewhere goes where you send it. **Guide advice:** add these to your data map:

- **Self-hosted runners** run wherever you host them. Azure private networking for GitHub-hosted runners offers [EU runner regions](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/network-details-for-ghecom), such as France Central and Sweden Central for x64. Runner regions are separate from data hosting.
- **Webhooks, GitHub Apps and OAuth apps** send data to their endpoints. Check where each vendor hosts it.
- **Audit log streaming** sends events to the storage, SIEM or log service you choose. Choose an EU destination.
- **Developer machines and clones** hold copies of code. Residency does not replace endpoint controls.

## Worked example: the DPO's one-page answer

**Hypothetical scenario:** A public-sector agency's DPO asks one question: "Where does our code live?" The platform lead answers on one page:

1. Code, issues, pull requests, Actions logs, backups and user identity data are stored in the EU region, which includes Norway and Switzerland. Link: GitHub's storage page.
2. GitHub documents five categories that may be stored outside the region, plus TLS certificate data. Each has a decision: accept (telemetry, billing, TLS), policy (support tickets) or configure (Copilot policy enabled, secret scanning validity checks enabled only for selected repositories).
3. The integrations list shows two EU-hosted SaaS tools and the audit log stream to an EU storage account.

The DPO can sign off because every exception has a named decision. The page does not claim that "nothing ever leaves the EU". The documentation does not support that claim, and an auditor would find the gap.
