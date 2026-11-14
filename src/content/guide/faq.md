---
title: Frequently asked questions
section: Adopt with confidence
order: 10
description: Short, sourced answers to the questions DPOs, lawyers, security teams and developers ask about GitHub data residency in the EU.
verified: "2026-11-12"
checks:
  - question: A consultant works for two of your enterprises, one on github.com and one on GHE.com. How many licences does she need?
    answer: Two. The General Terms (section 1.3) say one licence gives access to one cloud environment, and give the example of a user who accesses both a US-based and a Europe-based enterprise needing two licences.
  - question: Does choosing the EU region mean US authorities can never obtain your data?
    answer: No. GitHub, Inc. is a US provider, and the CLOUD Act reaches data in a provider's control wherever it is stored. Residency is backed by contractual protections, such as redirecting requests, notifying you and challenging orders, not by immunity.
sources:
  - https://github.com/customer-terms/general-terms
  - https://github.com/customer-terms/github-data-protection-agreement
  - https://github.com/customer-terms/github-generative-ai-services-terms
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-storage-of-your-data-with-data-residency
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency
  - https://docs.github.com/en/site-policy/other-site-policies/guidelines-for-legal-requests-of-user-data
  - https://learn.microsoft.com/en-us/privacy/eudb/eu-data-boundary-learn
  - https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs
  - https://www.law.cornell.edu/uscode/text/18/2713
---

## What you will learn

- Answer the most common adoption questions in one or two sentences.
- Know which source to quote for each answer.
- Spot the questions that still need a direct answer from GitHub.

Answers reflect public sources on 12 November 2026. Where no public source answers a question, the answer says so.

## Data and location

### Does anything leave the EU?

Yes, a documented set of categories: telemetry with identifiers, billing, support data, Copilot data unless you enable the policy, opt-in secret scanning checks and TLS certificate data. See [the data map](/part-2/2-data-map/). GitHub "does not notify you when transfers occur".

### Is our data stored only in EU member states?

Not necessarily. Since 1 May 2026 the EU region also includes Azure regions in Norway and Switzerland, alongside France, Sweden, Germany and the Netherlands. If your policy says "EU member states only", update it or raise the difference before you sign. See [What GHE.com is](/part-2/1-ghe-com/).

### Is GitHub part of the Microsoft EU Data Boundary?

GitHub says the Norway and Switzerland expansion [aligns the region with Microsoft's EU Data Boundary](https://github.blog/changelog/2026-03-31-eu-data-residency-region-expanding-to-include-efta-countries/). But GitHub is not mentioned on Microsoft's [EU Data Boundary page](https://learn.microsoft.com/en-us/privacy/eudb/eu-data-boundary-learn) at the review date. GHE.com residency is a separate GitHub commitment, documented by GitHub and anchored in DPA §7.A. If your policy references the EU Data Boundary by name, confirm with your account team.

### Can we use our own encryption keys?

We found no public documentation of customer-managed keys for GHE.com at the review date. Ask GitHub directly and get the answer in writing.

## GitHub Copilot

### Is our code used to train AI models?

No. The [Generative AI Services Terms](https://github.com/customer-terms/github-generative-ai-services-terms), section 3: GitHub will not use Inputs or Outputs to train generative AI models without your documented instructions.

### Does Copilot inference happen in the EU?

Only after an enterprise owner enables **Restrict Copilot to data residency compliant models**. It is off by default and adds 10% to AI credit consumption. See [Copilot](/part-2/3-copilot/).

### Are prompts recorded in the audit log?

No. The [audit log](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs) "does not include client session data, such as the prompts a user sends to Copilot locally." It records settings, policy, seat and agent activity events.

### Can we use every model that github.com offers?

No. Only models certified and available in the EU region appear. New models can arrive later. Check the [current list](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency#available-ai-models-by-region).

## Contract and law

### Who is our contracting party, and which law applies?

For direct purchases, the contract is with GitHub, Inc. The [General Terms §10.11](https://github.com/customer-terms/general-terms) apply **Irish law and Dublin courts** if your principal office is in the EU, EEA or Switzerland. The SCCs in the DPA are governed by Dutch law. If you buy through Microsoft, your Microsoft agreement sets these terms.

### What happens if a government asks GitHub for our data?

GitHub's [legal request guidelines](https://docs.github.com/en/site-policy/other-site-policies/guidelines-for-legal-requests-of-user-data) say it will not disclose the contents of private repositories without a valid search warrant, and it notifies affected users unless the law prevents it. The DPA adds redirecting requests to you and challenging orders (Annex IV). See [Map the regulations](/part-3/2-regulations/) on the CLOUD Act.

### Can GitHub withdraw the service?

The General Terms allow termination without cause on 30 days' notice (§9.2). GitHub can also modify or withdraw a product in a jurisdiction for regulatory reasons, with a refund as the sole remedy (§9.4), and can suspend where performance would breach US trade or sanctions laws (§10.5). These are the reasons your [exit plan](/part-4/1-readiness/) matters.

### Do GitHub staff commit to EU-only operations?

We found no public commitment that only EU-based staff operate or support GHE.com. If your policy requires it, raise it in procurement.

## Licensing and operations

### Does a user in both github.com and GHE.com need two licences?

Yes. [General Terms §1.3](https://github.com/customer-terms/general-terms): one licence gives access to one cloud environment.

### Can we move back to github.com later, or change our subdomain?

There is no official migration path from GHE.com back to github.com, and the subdomain is permanent. Choose both deliberately. See [Set up, connect and migrate](/part-4/2-migrate/).

### Can developers still contribute to open source?

Not from their managed account. Public repositories are unavailable on GHE.com. Developers use a separate personal github.com account for open source, under your contribution policy.

### Is anything missing compared with github.com?

Yes. The [feature overview](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/feature-overview-for-github-enterprise-cloud-with-data-residency) lists features that are currently or permanently unavailable, including GitHub Marketplace and public repositories. Test your top workflows during the trial.

## Worked example: the one-hour FAQ session

**Hypothetical scenario:** Before migration, a platform lead runs a one-hour session for 40 team leads. She projects this page and answers each question by opening the linked source, not from memory. Three questions have no public answer: customer-managed keys, EU-only staff and the EU Data Boundary. She logs them as open items with the account team and posts the answers on the internal wiki when they arrive.
