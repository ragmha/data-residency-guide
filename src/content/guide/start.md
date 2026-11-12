---
title: EU data residency on GitHub, adopted with confidence
section: Course index
order: 0
description: An independent, sourced guide for teams adopting GitHub Enterprise Cloud with data residency in the EU. It covers why sovereignty matters, what stays in the EU, Copilot, the DPA, EU law and a readiness plan.
verified: "2026-11-12"
sources:
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-github-enterprise-cloud-with-data-residency
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-storage-of-your-data-with-data-residency
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency
  - https://github.com/customer-terms/github-data-protection-agreement
---

Your source code is your intellectual property, and your repositories hold much more: names, emails, design decisions, security findings and sometimes regulated data. European rules increasingly ask where that data lives, who can reach it, and whether you could leave.

GitHub Enterprise Cloud with data residency, known as **GHE.com**, stores your code and its history in the EU. This guide helps you adopt it knowing exactly what it does and does not promise, with a primary source behind every claim.

## The answer in 60 seconds

- **What stays in the EU:** repositories, pull requests, issues, Actions data and logs, backups, and user identity data ([GitHub's storage page](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-storage-of-your-data-with-data-residency)).
- **What can leave:** a documented set of categories, including telemetry, billing, support data and some opt-in features. Each one needs a decision, not a surprise.
- **Copilot:** stays in the EU only after you enable the residency policy. It is off by default and adds 10% to AI credit consumption ([Copilot with data residency](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency)).
- **Contract:** the [GitHub DPA](https://github.com/customer-terms/github-data-protection-agreement) makes your region choice a processing instruction and adds transfer safeguards.
- **What it is not:** full sovereignty. GitHub is a US company, so residency is location plus contractual protection, not immunity from foreign law.

## Who this guide is for

| If you are | Start with |
| --- | --- |
| A DPO or privacy lead | [Why sovereignty](/part-1/1-why-sovereignty/), [the data map](/part-2/2-data-map/), [the DPA](/part-3/1-dpa/) |
| A lawyer or in procurement | [Residency vs sovereignty](/part-1/2-residency-vs-sovereignty/), [the DPA](/part-3/1-dpa/), [the regulations](/part-3/2-regulations/) |
| A CISO or security lead | [The data map](/part-2/2-data-map/), [Copilot](/part-2/3-copilot/), [the readiness checklist](/part-4/1-readiness/) |
| A platform engineer | [What GHE.com is](/part-2/1-ghe-com/), [Set up, connect and migrate](/part-4/2-migrate/) |
| Leading the decision | Read everything in order. Each chapter takes about ten minutes. |

## How to read it

- **Every factual claim links to a primary source:** GitHub documentation, GitHub's customer terms, EUR-Lex or the European Commission.
- **"Guide advice"** marks recommendations. Treat them as a starting point, not legal advice.
- **"Hypothetical scenario"** marks worked examples. The organisations are invented.
- Each chapter ends with questions to check your understanding, and the [sources page](/sources/) lists what we could and could not verify.

This guide is independent and is not legal advice. GitHub's terms and features change, so check the review date on each page and confirm against the linked sources before you rely on them.
