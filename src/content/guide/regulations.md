---
title: Map the regulations
section: Contracts and law
order: 7
description: Match each EU law that touches your GitHub enterprise to what it asks, what GitHub gives you as evidence, and what you still have to do.
verified: "2026-11-12"
checks:
  - question: Your bank uses GHE.com for the code behind its payment platform. Which DORA duty is easiest to forget?
    answer: The exit strategy. DORA Article 28(8) requires exit strategies for ICT services supporting critical or important functions. Residency does not remove that duty, so document how you would move repositories, Actions workflows and history to another platform.
  - question: Does the AI Act make Copilot a high-risk AI system for your developers?
    answer: Code assistance is not among the high-risk use cases in Annex III, provided you do not use it in one of those contexts, such as evaluating workers. As a deployer you still have the Article 4 duty to ensure sufficient AI literacy among staff, which has applied since 2 February 2025.
  - question: GitHub is not on the ESAs' list of critical ICT third-party providers. Does that reduce your DORA obligations?
    answer: No. The designation decides which providers the European Supervisory Authorities oversee directly. Your own duties under DORA, such as the register of information, contract terms, risk assessment and exit plans, apply to every ICT provider you use.
sources:
  - https://eur-lex.europa.eu/eli/reg/2016/679/oj
  - https://eur-lex.europa.eu/eli/dec_impl/2023/1795/oj
  - https://curia.europa.eu/site/upload/docs/application/pdf/2025-09/cp250106en.pdf
  - https://eur-lex.europa.eu/eli/dir/2022/2555/oj
  - https://eur-lex.europa.eu/eli/reg/2022/2554/oj
  - https://www.eba.europa.eu/publications-and-media/press-releases/european-supervisory-authorities-designate-critical-ict-third-party-providers-under-digital
  - https://eur-lex.europa.eu/eli/reg/2024/1689/oj
  - https://eur-lex.europa.eu/eli/reg/2023/2854/oj
  - https://eur-lex.europa.eu/eli/reg/2024/2847/oj
  - https://www.law.cornell.edu/uscode/text/18/2713
  - https://transparencycenter.github.com/
---

## What you will learn

- Match each EU rule to the part of your GitHub setup it affects.
- Point to the GitHub evidence for each duty, and see where none exists.
- Plan the actions that stay with you whatever region you choose.

This is a map, not legal advice. Sector rules, national laws and your regulator's guidance may add more.

## The map

| Rule | What it asks | GitHub evidence | Your action |
| --- | --- | --- | --- |
| [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj) Art. 28 | A processor contract with set terms | [GitHub DPA](/part-3/1-dpa/) | Keep the signed version and your record of processing |
| GDPR Ch. V (Art. 44–46) | A legal basis for transfers outside the EEA | DPA §7: Data Privacy Framework certification and SCCs | Transfer impact assessment for the [out-of-region categories](/part-2/2-data-map/) |
| GDPR Art. 33 | Tell the supervisory authority within 72 hours of becoming aware of a breach | DPA §6: notice "without undue delay" | Put GitHub notices into your incident runbook |
| [NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj) Art. 21(2)(d) | Supply chain security, including direct suppliers | SOC 1 and SOC 2 Type 2 and ISO 27001 reports (DPA §5) | Supplier risk assessment and secure development rules on the platform |
| [DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj) Art. 28 | Register of information; exit strategy for critical functions (Art. 28(8)) | DPA §8 deletion and return; General Terms §9.5, a 90-day migration window | Add GitHub to the register; write and test an exit plan |
| DORA Art. 30 | Key contract provisions in one written document | Customer Agreement, DPA and SLAs | Gap-check the contract against Art. 30 with legal |
| [AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) Art. 4 | AI literacy for staff using AI systems | Copilot documentation and policies | Train developers; keep a record |
| [Data Act](https://eur-lex.europa.eu/eli/reg/2023/2854/oj) Ch. VI | Switching rights; switching charges banned from 12 January 2027 (Art. 29) | Git is portable; export and migration tools | Know your switching terms and test an export |
| Data Act Art. 32 | Providers must take measures against unlawful third-country access to non-personal data | DPA Annex IV commitments (for personal data) | Ask GitHub how it applies Art. 32 to non-personal data |
| [Cyber Resilience Act](https://eur-lex.europa.eu/eli/reg/2024/2847/oj) | Vulnerability handling for products you ship; reporting from 11 September 2026 | Code scanning, Dependabot, secret scanning and audit logs | Use the platform to evidence your secure development process |

## Key dates

| Date | What happens |
| --- | --- |
| 17 January 2025 | DORA applies |
| 2 February 2025 | AI Act Chapters I and II apply, including Art. 4 AI literacy |
| 2 August 2025 | AI Act rules for general-purpose AI model providers apply |
| 12 September 2025 | Most of the Data Act applies |
| 18 November 2025 | ESAs publish the [first list of critical ICT third-party providers](https://www.eba.europa.eu/publications-and-media/press-releases/european-supervisory-authorities-designate-critical-ict-third-party-providers-under-digital) |
| 2 August 2026 | Most of the AI Act applies |
| 11 September 2026 | Cyber Resilience Act reporting duties (Art. 14) apply |
| 12 January 2027 | Data Act ban on switching charges |
| 11 December 2027 | Main Cyber Resilience Act obligations apply |

NIS2 had a transposition deadline of 17 October 2024. Your duties depend on your country's national law, so check its status there.

## Transfers: why the legal basis still matters

The EU-US Data Privacy Framework rests on [adequacy decision 2023/1795](https://eur-lex.europa.eu/eli/dec_impl/2023/1795/oj). The General Court dismissed the Latombe challenge on 3 September 2025 ([press release](https://curia.europa.eu/site/upload/docs/application/pdf/2025-09/cp250106en.pdf)). An appeal to the Court of Justice is pending.

Two earlier transfer frameworks, Safe Harbour and Privacy Shield, were struck down. Residency reduces how much depends on the outcome: repository content is stored in the EU, and with Copilot residency on, inference stays in the EU. But the DPA keeps the SCCs as a second basis, and some categories still leave the region.

**Guide advice:** write your transfer impact assessment so it still works if the Data Privacy Framework falls. In practice that means relying on the SCCs plus residency, and listing the data that still leaves the EU.

## Where residency does not reach: the CLOUD Act

The [US CLOUD Act](https://www.law.cornell.edu/uscode/text/18/2713) lets US authorities compel a US provider to produce data in its "possession, custody, or control, regardless of whether such communication, record, or other information is located within or outside of the United States". GitHub, Inc. is a US company, so data location alone does not answer this risk.

What you have instead:

- **Contract:** DPA §3.F and Annex IV, which cover redirecting requests to you, notifying you, and challenging orders.
- **Transparency:** GitHub's [transparency centre](https://transparencycenter.github.com/) publishes request statistics.
- **Your own controls:** encrypt your most sensitive artefacts before they reach GitHub, and keep regulated personal data out of repositories.

The [residency vs sovereignty chapter](/part-1/2-residency-vs-sovereignty/) covers how to describe this residual risk honestly.

## Worked example: a fintech's regulator file

**Hypothetical scenario:** A Lithuanian payment institution moves to GHE.com. Its compliance officer prepares a one-page file for the national regulator:

- **Register of information:** GitHub is listed as the ICT provider for source code management and CI/CD, supporting a critical function.
- **Contract:** gaps against DORA Art. 30 are listed, with the mitigations agreed.
- **Exit plan:** mirror repositories nightly to an internal Git server, and export workflow definitions. The team ran an export test in the last quarter.
- **Transfers:** a transfer impact assessment covering the out-of-region categories, written to survive the loss of the Data Privacy Framework.
- **AI:** the Copilot residency policy is enabled and developer AI literacy training is recorded.

When the regulator asks, the answer is a link, not a project.
