---
title: Read the DPA like a DPO
section: Contracts and law
order: 6
description: Walk through the GitHub Data Protection Agreement clause by clause, map it to GDPR Article 28, and note what you still own.
verified: "2026-11-12"
checks:
  - question: GitHub tells you about a security incident affecting your enterprise. Who notifies your supervisory authority within 72 hours?
    answer: You do. The DPA commits GitHub to notify you "without undue delay" and to assist, but you are "solely responsible" for your own notification duties under GDPR Article 33.
  - question: GitHub adds a new subprocessor you cannot accept. What are your options?
    answer: GitHub gives 30 days' notice before the subprocessor gets access. If you object, you can terminate the affected service without penalty by written notice before the notice period ends. If the service is part of a bundle, the termination applies to the whole bundle.
  - question: A team wants to try a preview Copilot feature on a repository with customer data. What does the DPA say?
    answer: Previews are excluded from the DPA unless GitHub designates them, and the DPA says customers should not use Previews to process personal data or regulated data unless otherwise noted.
sources:
  - https://github.com/customer-terms/github-data-protection-agreement
  - https://github.com/customer-terms
  - https://github.com/customer-terms/general-terms
  - https://www.microsoft.com/licensing/terms/productoffering/GitHubOfferings/MCA
  - https://docs.github.com/en/site-policy/privacy-policies/github-subprocessors
  - https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement
  - https://eur-lex.europa.eu/eli/reg/2016/679/oj
  - https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj
---

## What you will learn

- Identify which contract documents govern your GitHub use, whether you buy directly or through Microsoft.
- Map the GitHub DPA to the GDPR Article 28 processor checklist.
- List the duties the DPA leaves with you.

This chapter summarises the [GitHub Data Protection Agreement](https://github.com/customer-terms/github-data-protection-agreement) as published on 12 November 2026. It is not legal advice. Your signed agreement and its referenced versions are what count.

## Which documents apply

| You buy | Main agreement | Data protection terms |
| --- | --- | --- |
| Directly from GitHub | [GitHub Customer Agreement](https://github.com/customer-terms): General Terms, Product Specific Terms and the Generative AI Services Terms for Copilot | GitHub DPA |
| Through a Microsoft agreement, such as an EA or MCA | Your Microsoft agreement, including the [Microsoft Product Terms for GitHub Offerings](https://www.microsoft.com/licensing/terms/productoffering/GitHubOfferings/MCA) | Check your agreement. The GitHub Offerings terms refer to the security practices in the GitHub DPA. |

Two Product Terms details matter for residency buyers. They list "GitHub Enterprise (with data residency enabled)" and the Copilot plans as **GitHub Core Online Services**, and they state that each complies with **SSAE 18 SOC 1 Type II and SOC 2 Type II**.

**Guide advice:** ask your account team in writing which DPA version your agreement references. Store that answer with the contract.

## The DPA mapped to GDPR Article 28

| Article 28(3) requirement | Where the GitHub DPA covers it |
| --- | --- |
| Process only on documented instructions | §3.B lists your instructions. §3.D says GitHub will tell you if it believes an instruction breaks the law. |
| Personnel confidentiality | Annex II: personnel are bound by confidentiality that continues after their engagement ends. |
| Security of processing (Art. 32) | §4 and Annex II: technical and organisational measures, including at least weekly backups stored apart from primary systems, least privilege, logging and annual risk assessment. |
| Subprocessors | §9: general authorisation, a published [subprocessor list](https://docs.github.com/en/site-policy/privacy-policies/github-subprocessors), 30 days' notice, and a right to terminate the affected service without penalty. |
| Help with data subject requests | §3.G: GitHub redirects data subjects to you and provides "the necessary means to respond". |
| Help with security, breach and DPIA duties | §6: incident notice "without undue delay", investigation and mitigation. §6.C: help with your notifications. |
| Delete or return at the end | §8: "delete or return all the Customer Personal Data to You, whichever you elect". The General Terms §9.5 give 90 days after termination to migrate repository data. |
| Audits and information | §5: SOC 1 Type 2, SOC 2 Type 2 and ISO 27001 reports on request. Where a regulator needs more, there is an independent accredited auditor, 30 days' notice and your cost. |

## Clauses that matter most for EU residency

### Your region is an instruction (§7.A)

"If you select and use an Online Service where certain data is stored at rest in a specific geographic area, GitHub will store the applicable data based on that instruction." This is the contractual anchor for GHE.com residency. Read it with the [documented exceptions](/part-2/2-data-map/), which §7 also permits.

### Transfers still have a legal basis (§7.B–C)

Data that leaves the EU, such as telemetry, billing or default Copilot data, is covered by:

- GitHub's self-certification to the **EU-US Data Privacy Framework**, with the UK and Swiss extensions.
- And/or the **2021 Standard Contractual Clauses** ([Decision 2021/914](https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj)): Module One for GitHub as controller, and Modules Two and Three for GitHub as processor. They are governed by **Dutch law**, with disputes before **Dutch courts**.
- The UK Addendum and Swiss adaptations for those jurisdictions.

### Government access: redirect, notify, challenge (§3.F and Annex IV)

- GitHub will not disclose your data to law enforcement unless required by law. It will direct requests to you where possible.
- If disclosure is compelled, GitHub will contact you with a copy of the legal process, unless legally prohibited.
- Annex IV adds that GitHub will try to get any gag order waived and **challenge the disclosure order legally**.
- GitHub will indemnify data subjects for damage caused by disclosure to a non-EU/EEA government body in breach of GDPR Chapter V, subject to stated exceptions.

### GitHub as independent controller (§3.C)

GitHub acts as a controller only for an "exhaustive" list:

- billing and account management
- compensation calculations
- legal obligations
- abuse and malware detection
- aggregated statistics

It commits not to use your data for profiling, advertising or data selling. That data is governed by the [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).

### Previews are outside the DPA (§2.A.ii)

Previews are excluded unless GitHub designates otherwise, and "Customers should not use Previews to process Personal Data or other data that is subject to legal or regulatory compliance requirements." **Guide advice:** make this an enterprise policy and disable preview features you have not assessed.

### Restricted data types (§12)

Without GitHub's prior written consent, do not upload criminal-offence data subject to US CJIS rules, US health data under HIPAA, clinical research data, or biometric identification data. Keep such data out of repositories, issues and prompts.

## What stays with you

- **Lawfulness:** §3.D says GitHub is not responsible for working out which laws apply to your business.
- **Breach notification:** you notify your supervisory authority within 72 hours under GDPR Article 33. GitHub's notice has no fixed hour count, so build that into your incident runbook.
- **Data subject requests:** you answer them. GitHub redirects requesters to you.
- **Records and assessments:** your record of processing, any DPIA, and a transfer impact assessment for the out-of-region categories.
- **Contact details:** §14 says you must keep your notice contact accurate and monitor it. Notices to GitHub go to support or the privacy form, with a copy to `dpo@github.com`.
- **Subscribe to subprocessor changes:** the 30-day objection window only helps if someone reads the notices.

## Worked example: the procurement redline

**Hypothetical scenario:** A Dutch energy company's procurement team receives the standard DPA. Its template demands a 24-hour breach notice and on-site audit rights.

Legal compares the asks with the DPA:

- **Audit:** §5 already gives reports on request, plus regulator-driven audits through an accredited third party. That satisfies their NIS2 supplier policy, so they drop the on-site demand.
- **Breach notice:** "without undue delay" does not match the internal template. Instead of a long redline, they record the gap, add GitHub's status page and security notices to their monitoring, and set their own 72-hour clock from the moment they become aware.
- **Previews:** they adopt the §2.A.ii rule as an enterprise policy.

The contract closes in weeks, not months, and the gaps are documented rather than hidden.
