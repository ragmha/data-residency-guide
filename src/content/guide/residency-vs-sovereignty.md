---
title: Residency is not the same as sovereignty
section: Why sovereignty
order: 2
description: Split sovereignty into four layers, see which ones GHE.com in the EU covers, and decide which residual risks you accept.
verified: "2026-11-12"
diagram: sovereignty-layers
checks:
  - question: A procurement form asks whether GHE.com in the EU is "a sovereign cloud". How should you answer?
    answer: Describe it by layer instead of yes or no. It gives strong data location in the EU, customer control over identity and much of the operations, an EU-friendly contract framework, and a US-owned provider. Under the Commission's proposed four-level model, data residency matches Level 1.
  - question: Your contract with GitHub is direct and your principal office is in Germany. Which law governs the agreement?
    answer: The laws of Ireland, with the courts in Dublin, under section 10.11 of the GitHub General Terms. The DPA's Standard Contractual Clauses are governed by Dutch law.
  - question: Which sovereignty layer does a tested exit plan address?
    answer: Portability and exit. It does not change where data is stored or who owns the provider, but it limits how locked in you are if the risk picture changes.
sources:
  - https://digital-strategy.ec.europa.eu/en/policies/cloud-and-ai-development-act
  - https://commission.europa.eu/document/download/09579818-64a6-4dd5-9577-446ab6219113_en?filename=Cloud-Sovereignty-Framework.pdf
  - https://eur-lex.europa.eu/eli/reg/2018/1807/oj
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-github-enterprise-cloud-with-data-residency
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-storage-of-your-data-with-data-residency
  - https://github.com/customer-terms/general-terms
  - https://github.com/customer-terms/github-data-protection-agreement
  - https://transparencycenter.github.com/
---

## What you will learn

- Use four layers to describe sovereignty without slogans.
- Say exactly what GHE.com in the EU covers at each layer.
- Write down the residual risks you accept, with the reason.

## Three words that get mixed up

- **Data residency:** a provider commits to store, and sometimes process, your data in a chosen geography. It is a product feature backed by contract. GHE.com in the EU is data residency.
- **Data localisation:** a *legal requirement* to keep data in a territory. EU law defines it in [Regulation 2018/1807, Article 3(5)](https://eur-lex.europa.eu/eli/reg/2018/1807/oj) and generally restricts Member States from imposing it on non-personal data.
- **Sovereignty:** the degree to which you, and EU law, stay in control of the service: where data is, who operates it, whose law reaches it, and whether you can leave.

The European Commission's [proposed Cloud and AI Development Act](https://digital-strategy.ec.europa.eu/en/policies/cloud-and-ai-development-act) makes the difference concrete with four assurance levels:

| Level | Proposed definition |
| --- | --- |
| 1 | Data is processed and stored in infrastructure located in the Union. |
| 2 | Providers demonstrate independence from third countries and transparency over their software supply chain. |
| 3 | Providers are owned and controlled from the EU and meet additional criteria, such as personnel citizenship. |
| 4 | Full transparency and control over the software supply chain and no interference from a third country. |

The Commission's [Cloud Sovereignty Framework](https://commission.europa.eu/document/download/09579818-64a6-4dd5-9577-446ab6219113_en?filename=Cloud-Sovereignty-Framework.pdf), used in its own cloud tenders, goes further, with eight objectives from strategic and legal sovereignty to supply chain and sustainability.

**Guide advice:** most private-sector requirements are about Level 1 plus strong contract terms. Only adopt Level 3 or 4 language if a regulator, tender or customer contract actually demands it. Those levels exclude US-owned providers by design.

## Four layers, and where GHE.com in the EU lands

Use these layers to describe any provider. The scoring is guide advice based on GitHub's public documentation and terms.

### 1. Data location: strong

GitHub [stores customer content, Actions data and logs, backups and personal identifiers](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-storage-of-your-data-with-data-residency) in the EU region. The [DPA, section 7.A](https://github.com/customer-terms/github-data-protection-agreement), turns your region choice into a contractual instruction: "GitHub will store the applicable data based on that instruction." The exceptions are documented, and Copilot needs a policy switched on. See [the data map](/part-2/2-data-map/) and [Copilot](/part-2/3-copilot/).

### 2. Operational control: shared

You control identity through Enterprise Managed Users and your own identity provider, conditional access, IP allow lists, audit log streaming to your own storage, and Azure private networking for runners. GitHub operates the platform, support and security monitoring.

Our review did not find a public commitment that only EU-based personnel can access GHE.com systems. **Guide advice:** if you need that, raise it in negotiation and get the answer in writing.

### 3. Legal jurisdiction: mixed

What works in your favour:

- For direct contracts, if your principal office is in the EU, EEA or Switzerland, the [GitHub General Terms, section 10.11](https://github.com/customer-terms/general-terms), make Irish law govern the agreement, with the courts in Dublin.
- The DPA's Standard Contractual Clauses are governed by Dutch law.
- The DPA's Annex IV commits GitHub to redirect, notify and challenge government orders, and to compensate data subjects in some cases.
- GitHub publishes a [transparency report](https://transparencycenter.github.com/).

What stays:

- GitHub, Inc. is a US company owned by Microsoft, so US legal process can reach it.
- Section 10.5 of the General Terms lets GitHub suspend or terminate where performance would breach US or other trade and sanctions laws.
- Section 9.4 lets GitHub change or withdraw a product in a jurisdiction because of new regulation, with a refund as the sole remedy.

### 4. Portability and exit: good for code, plan the rest

Git is an open format, so every clone is a full copy of history. The General Terms ([section 9.5](https://github.com/customer-terms/general-terms)) give you 90 days after termination to migrate repository data. Issues, pull request history, Actions workflows, secrets, Packages and integrations need their own export plan. There is no official migration path from GHE.com back to github.com. See [Set up, connect and migrate](/part-4/2-migrate/).

## Write down the residual risk

Confidence does not mean zero risk. It means every remaining risk has an owner, a reason and a review date.

| Residual risk | Typical treatment | Owner |
| --- | --- | --- |
| US legal process reaches GitHub | Accept, citing DPA Annex IV, transparency reporting and the sensitivity of your data. Keep the most sensitive secrets out of repositories. | DPO and Legal |
| Documented categories leave the EU region | Accept the low-risk ones. Control the rest with policy, such as Copilot residency and support-ticket rules. | DPO and Platform |
| Sanctions or regulatory withdrawal | Accept with an exit plan and regular full mirrors of critical repositories. | CISO |
| Operator personnel location | Accept, or negotiate a contractual commitment. | Procurement |
| Lock-in for non-Git data | Reduce with export scripts and infrastructure as code for settings. | Platform |

## Worked example: the sovereignty questionnaire

**Hypothetical scenario:** A software vendor bids for a regional government contract. The tender asks for the "sovereignty level" of every tool that touches the delivered code.

The team answers per layer instead of claiming "fully sovereign":

- Data location: EU, with the residency policy on for Copilot.
- Operations: identity and logs under the vendor's control.
- Jurisdiction: Irish-law contract, with a US-owned provider and Annex IV commitments.
- Exit: Git mirrors held in the vendor's own EU storage, with a quarterly restore test.

The tender only required Level 1 for development tooling, so the answer scores fully. Its honesty also avoids a later dispute over a "sovereign" claim.
