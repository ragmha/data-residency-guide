---
title: Why sovereignty is on the table
section: Why sovereignty
order: 1
description: Understand the legal, regulatory and strategic pressures that make EU organisations ask where their code lives and who can reach it.
verified: "2026-11-12"
checks:
  - question: Your general counsel says "the EU-US Data Privacy Framework is in force, so transfers are solved." What is the risk in relying on that alone?
    answer: The two previous EU-US frameworks were both struck down by the Court of Justice (Schrems I and Schrems II). The current framework survived a General Court challenge in September 2025, but an appeal is pending. Keeping data in the EU reduces how much you depend on any one transfer mechanism surviving.
  - question: Does storing data in the EU stop a US authority from ordering a US-parented provider to hand it over?
    answer: Not by itself. The US CLOUD Act applies to data in a provider's "possession, custody, or control, regardless of whether" it is stored inside or outside the United States. What helps is a contractual commitment to redirect, notify and challenge such orders, which the next chapters cover.
  - question: A bank asks why its source code repositories belong in its DORA ICT third-party risk work. What is the short answer?
    answer: DORA requires financial entities to manage ICT third-party risk, keep a register of information on ICT contracts, and have exit strategies. A hosted code platform that builds and deploys production systems is an ICT service, so it belongs in that work.
sources:
  - https://eur-lex.europa.eu/eli/reg/2016/679/oj
  - https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62018CJ0311
  - https://eur-lex.europa.eu/eli/dec_impl/2023/1795/oj
  - https://curia.europa.eu/site/upload/docs/application/pdf/2025-09/cp250106en.pdf
  - https://eur-lex.europa.eu/eli/C/2025/6610/oj/eng
  - https://www.law.cornell.edu/uscode/text/18/2713
  - https://eur-lex.europa.eu/eli/dir/2022/2555/oj
  - https://eur-lex.europa.eu/eli/reg/2022/2554/oj
  - https://eur-lex.europa.eu/eli/reg/2023/2854/oj
  - https://digital-strategy.ec.europa.eu/en/policies/cloud-and-ai-development-act
---

## What you will learn

- Explain why source code and its surrounding data deserve the same care as customer data.
- Name the four pressures behind EU sovereignty requirements, with the law behind each.
- Separate what data residency can answer from what it cannot.

## Your repositories hold more than code

A code platform is easy to file under "developer tooling". Look inside a typical enterprise repository and you find:

- **Personal data:** commit author names and email addresses, issue and pull request discussions, review comments and audit logs.
- **Trade secrets:** the algorithms, pricing logic and models that make your product different.
- **A map of your systems:** infrastructure as code, network layouts, deployment pipelines and, too often, a leaked secret.
- **Unfixed weaknesses:** security findings and private advisories that describe how you could be attacked before a fix ships.

With an AI coding assistant, the same material also flows through prompts and responses. So "where does our code live, and who can reach it?" is a data protection, security and business-continuity question, not just a tooling one.

## Four pressures behind the question

### 1. Data protection law and fragile transfer mechanisms

The [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj) lets personal data leave the EU only under Chapter V transfer rules. Twice the Court of Justice has struck down the legal basis for EU-US transfers. In [Schrems II (C-311/18)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62018CJ0311) in July 2020, it invalidated Privacy Shield, and companies scrambled to run transfer impact assessments.

The current [EU-US Data Privacy Framework](https://eur-lex.europa.eu/eli/dec_impl/2023/1795/oj) was adopted on 10 July 2023. On 3 September 2025 the General Court [dismissed an action to annul it](https://curia.europa.eu/site/upload/docs/application/pdf/2025-09/cp250106en.pdf) (Latombe v Commission), and an [appeal (C-703/25 P)](https://eur-lex.europa.eu/eli/C/2025/6610/oj/eng) has been lodged. The framework is in force today. History says to plan for it changing.

**Why residency helps:** when your core data is stored in the EU, fewer of your processing activities depend on a transfer mechanism surviving the next court case.

### 2. Reach of foreign law

The US [CLOUD Act](https://www.law.cornell.edu/uscode/text/18/2713) (18 U.S.C. § 2713) requires US providers to disclose data within their "possession, custody, or control, regardless of whether" it is located inside or outside the United States. US surveillance law was also the core of the Schrems II ruling.

**Why residency only partly helps:** GitHub is a US company owned by Microsoft. Storing data in the EU changes where it is, not which governments can make demands of the provider. What you can add is a contract that commits the provider to resist, which [the DPA chapter](/part-3/1-dpa/) covers.

### 3. Operational resilience rules

Regulators now treat your suppliers as part of your risk:

- **[NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj):** Article 21 requires essential and important entities to manage supply-chain security, including the security of their direct suppliers.
- **[DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj):** applies to EU financial entities from 17 January 2025. It requires ICT third-party risk management, a register of information on ICT contracts, audit rights and exit strategies.
- **[Data Act](https://eur-lex.europa.eu/eli/reg/2023/2854/oj):** sets cloud-switching rules, and Article 32 asks providers to guard against third-country government access to non-personal data where it would conflict with EU or national law.

A platform that stores your code and runs your build and deploy pipelines is an ICT service under these rules. You need to know where it runs, how you would leave and what evidence you can show a supervisor.

### 4. Strategic autonomy

In June 2026 the European Commission proposed the [Cloud and AI Development Act](https://digital-strategy.ec.europa.eu/en/policies/cloud-and-ai-development-act), stating that "over reliance on non-EU cloud service providers poses a significant risk to Europe's digital autonomy and resilience". It is a proposal, not law yet. Public-sector buyers already score sovereignty in tenders, and regulated customers push the same questions down to their suppliers. If you sell to banks, governments or healthcare, expect a sovereignty questionnaire about your own development platform.

## What residency answers, and what it does not

| Question your stakeholders ask | Does EU data residency answer it? |
| --- | --- |
| Is our code stored in the EU? | **Yes.** Repositories, pull requests, Actions logs and personal identifiers are stored in-region. |
| Is our Copilot traffic processed in the EU? | **Only when you turn it on.** The Copilot data residency policy is off by default. |
| Does anything leave the EU? | **Some documented categories.** Telemetry, billing, support and some feature data can. See [the data map](/part-2/2-data-map/). |
| Can a non-EU government compel access? | **Not solved by location.** It is reduced by contract terms and transparency, not eliminated. |
| Can we leave if we need to? | **Partly.** Git is portable. Plan the rest, such as issues, Actions and integrations. |

**Guide advice:** be explicit about these boundaries with your stakeholders. Confidence comes from knowing exactly which risks you have reduced and which you have accepted, not from a blanket "sovereign" label.

## Worked example: the board question

**Hypothetical scenario:** A European insurer's board asks one question after a news story about foreign data access: "Is our source code safe from foreign governments?"

A weak answer is "yes, it is in the EU". The strong answer has four parts:

1. Our code and personal data are stored in GitHub's EU region, under a DPA that records that instruction.
2. Copilot prompts and responses stay in the EU because we enabled the residency policy.
3. GitHub is US-owned, so the remaining risk is a legal order. The DPA commits GitHub to redirect the requester, notify us where allowed and challenge the order. GitHub publishes a transparency report.
4. We hold a tested exit plan, so we are not locked in if the risk picture changes.

That answer is honest and verifiable, and it lets the board accept a specific, residual risk.
