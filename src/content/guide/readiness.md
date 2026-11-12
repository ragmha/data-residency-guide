---
title: Readiness checklist
section: Adopt with confidence
order: 8
description: Bring the right people in, collect an evidence pack, make the go or no-go decision, and write your exit plan before you need it.
verified: "2026-11-12"
diagram: adoption-path
checks:
  - question: The CISO asks for GitHub's SOC 2 report before approving GHE.com. Where do you get it?
    answer: An enterprise owner can download SOC 1 and SOC 2 Type 2, ISO/IEC 27001:2022, CSA STAR and other reports from the Compliance tab of the enterprise settings. Check that each report's scope covers GHE.com; the Microsoft Product Terms state SOC 1 and SOC 2 Type II compliance for GitHub Enterprise with data residency.
  - question: Who should own the decision to switch on the Copilot data residency policy?
    answer: The platform team flips the switch, but the DPO and the budget owner should agree to it first. It changes where AI processing happens and adds 10% to AI credit consumption.
  - question: Why write the exit plan before migrating, not after?
    answer: Because the subdomain is permanent and there is no official path from GHE.com back to github.com. Knowing what you can export, and testing it, is part of choosing the platform. DORA Article 28(8) also requires exit strategies for ICT services that support critical functions.
sources:
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/getting-started-with-data-residency-for-github-enterprise-cloud
  - https://docs.github.com/en/enterprise-cloud@latest/admin/overview/accessing-compliance-reports-for-your-enterprise
  - https://www.microsoft.com/licensing/terms/productoffering/GitHubOfferings/MCA
  - https://ghec.github.trust.page/
  - https://eu.githubstatus.com/
  - https://docs.github.com/en/site-policy/privacy-policies/github-subprocessors
  - https://github.com/customer-terms/github-data-protection-agreement
  - https://github.com/customer-terms/general-terms
  - https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise
  - https://eur-lex.europa.eu/eli/reg/2022/2554/oj
---

## What you will learn

- Give each stakeholder a clear role and question to answer.
- Collect an evidence pack that answers the usual objections.
- Run a go or no-go review and write an exit plan you can test.

## Who decides what

| Role | Their question | They own |
| --- | --- | --- |
| Data protection officer | Is personal data processed lawfully, and what leaves the EU? | Record of processing, DPIA if needed, transfer impact assessment |
| CISO or security lead | Is the platform secure and can we see what happens on it? | Supplier risk assessment, audit log streaming, incident runbook |
| Legal | Which terms apply, and do they meet our sector rules? | Contract review, DPA version, DORA Art. 30 gap check |
| Procurement | Who are we buying from, and on what licence? | Purchase route (GitHub or Microsoft), licences per environment, subprocessor notices |
| Platform engineering | Can we run it and move to it safely? | Trial, identity, network allowlists, migration, Copilot policy |
| Engineering leadership | Will developers stay productive? | Rollout plan, training, Copilot adoption |
| Budget owner | What does it cost, including Copilot residency? | Licences and the 10% Copilot residency uplift |

**Guide advice:** name one person as the adoption owner. Residency projects stall when every team waits for another to sign off.

## The evidence pack

Collect these before the go or no-go meeting. Most are public or downloadable.

| Evidence | Where to get it | Answers |
| --- | --- | --- |
| Data map | [Chapter 2.2](/part-2/2-data-map/) and GitHub's [storage doc](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-storage-of-your-data-with-data-residency) | What stays in the EU and what does not |
| Compliance reports | Enterprise settings, then **Compliance** ([how](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/accessing-compliance-reports-for-your-enterprise)) | SOC 1 and 2 Type 2, ISO 27001, CSA STAR, continuity plan |
| Trust centre | [GitHub Enterprise Cloud trust portal](https://ghec.github.trust.page/) | Security controls and documents to request |
| Signed contract and DPA | Your agreement; public [DPA](https://github.com/customer-terms/github-data-protection-agreement) | Processor terms, transfers and audit rights |
| Subprocessor list | [GitHub subprocessors](https://docs.github.com/en/site-policy/privacy-policies/github-subprocessors) | Who else processes the data |
| Service status | [GitHub Enterprise Cloud EU status page](https://eu.githubstatus.com/) | Incident history and live status for the EU region |
| Copilot settings | Screenshot of the residency policy and its audit log entry | That inference stays in the EU |
| Exit plan | Your own document (see below) | That you can leave |

Check the scope statement of each compliance report. The [Microsoft Product Terms for GitHub Offerings](https://www.microsoft.com/licensing/terms/productoffering/GitHubOfferings/MCA) state SOC 1 and SOC 2 Type II compliance for "GitHub Enterprise (with data residency enabled)".

## Go or no-go checklist

Tick every item before you move production work:

- [ ] Purchase route confirmed and the DPA version recorded.
- [ ] Data map reviewed by the DPO, with a transfer impact assessment for out-of-region categories.
- [ ] Trial enterprise tested: identity provider, Enterprise Managed Users, SCIM and conditional access.
- [ ] Network allowlists for `SUBDOMAIN.ghe.com` and its related hosts in place ([network details](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/network-details-for-ghecom)).
- [ ] Audit log streaming to the SIEM is working ([streaming](https://docs.github.com/en/enterprise-cloud@latest/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)).
- [ ] Copilot residency policy enabled and the model list approved.
- [ ] Preview features disabled until assessed (DPA §2.A).
- [ ] Subprocessor notices subscribed to, with a named reader.
- [ ] Incident runbook updated with GitHub contacts and the EU status page.
- [ ] Migration plan and pilot repositories chosen ([chapter 4.2](/part-4/2-migrate/)).
- [ ] Exit plan written and tested.

## Write the exit plan now

Your exit plan should answer four questions:

1. **What do we need to keep?** Code and history, issues and pull requests, Actions workflows and logs, packages, wikis and release assets.
2. **How do we get it out?** Git clones keep full history. Migration and export tools cover more, but check what each one does not move. Store secrets and variables in your own vault so they never need exporting.
3. **How long do we have?** The [General Terms §9.5](https://github.com/customer-terms/general-terms) allow 90 days after termination to migrate repository data. The DPA §8 lets you choose deletion or return.
4. **Have we tested it?** Run an export of a representative repository at least once a year, and record the result.

**Guide advice:** keep a scheduled mirror of critical repositories outside GitHub. It is cheap, it proves portability to auditors, and it is your fallback if access is ever suspended.

## Worked example: a two-week readiness sprint

**Hypothetical scenario:** A German manufacturer wants a decision in two weeks.

- **Week 1:** the platform team runs a trial with three organisations, connecting Entra ID and the SIEM. The DPO reviews the data map; legal confirms the company buys through its Microsoft agreement and records the DPA version.
- **Week 2:** security downloads the reports and checks their scope. Finance approves the Copilot uplift. The platform team exports a pilot repository to a self-hosted Git server as the exit test.

At the go or no-go meeting every box is ticked except subprocessor monitoring. They assign it there and then, and approve the migration.
