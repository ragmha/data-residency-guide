---
title: Copilot with EU data residency
section: What GHE.com gives you
order: 5
description: Turn on Copilot data residency, know what it guarantees and costs, and answer the questions legal and security teams ask about AI on your code.
verified: "2026-11-12"
checks:
  - question: You bought Copilot Business for your GHE.com enterprise and changed no settings. Is inference happening in the EU?
    answer: Not guaranteed. The "Restrict Copilot to data residency compliant models" policy is disabled by default. Until an enterprise owner enables it, Copilot data can be processed and stored outside the region.
  - question: Finance asks how much the residency policy adds to Copilot costs.
    answer: Requests processed with the policy enabled consume 10% more AI credits. An interaction that would use 100 AI credits uses 110.
  - question: Can you rely on content exclusion to stop Copilot from ever reading a sensitive file?
    answer: No. GitHub states content exclusion "is not a filesystem security boundary". It is a guardrail for GitHub-controlled tools. Keep secrets out of repositories and use access control for truly sensitive code.
sources:
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency
  - https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-storage-of-your-data-with-data-residency
  - https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies
  - https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-in-your-ide/set-up-copilot/authenticate-to-ghecom
  - https://docs.github.com/en/copilot/reference/ai-models/model-hosting
  - https://github.com/customer-terms/github-generative-ai-services-terms
  - https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/customer-copyright-commitment
  - https://docs.github.com/en/copilot/concepts/context/content-exclusion
  - https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs
  - https://docs.github.com/en/copilot/concepts/copilot-metrics
---

## What you will learn

- Enable Copilot data residency and explain exactly what it guarantees.
- Answer the training, retention, ownership and indemnity questions with contract references.
- Set up governance: policies, audit, metrics, content exclusion and client configuration.

## The one switch that matters

On GHE.com, Copilot data is listed among the categories GitHub [may store outside your region](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/about-storage-of-your-data-with-data-residency), **unless** you enable the policy. Copilot data residency is [available for the EU and US regions](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency).

1. Open your enterprise's Copilot policies page ([how to find it](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-enterprise-policies)).
2. In the **Features** section, enable **Restrict Copilot to data residency compliant models**. It is **disabled by default**.

With the policy on, GitHub says: "Your code, prompts, and Copilot responses never leave your region during inference processing." It enforces this at three levels:

| Level | What GitHub does |
| --- | --- |
| Authentication and routing | Users' tokens only grant access to your region-specific endpoints. |
| Model availability | Copilot only shows models certified and available in your region. Developers cannot reach models hosted elsewhere. |
| Logs and telemetry | Copilot-related logs and telemetry are stored in region-appropriate, compliant storage. |

## What it costs and what changes for developers

- **Price:** requests processed with the policy enabled consume **10% more AI credits**. GitHub gives the example of 100 credits becoming 110. It explains this as the extra cost model providers charge for regional and compliance-certified endpoints.
- **Models:** the EU list is shorter than github.com's, and new models can arrive later while providers deploy regional infrastructure. Check the [current EU model list](https://docs.github.com/en/enterprise-cloud@latest/admin/data-residency/github-copilot-with-data-residency#available-ai-models-by-region) rather than a copy, because it changes often.
- **Features:** all generally available Copilot features work. Preview features are supported with compliant models when they reach general availability.
- **Clients:** developers need a Copilot extension or CLI released in 2025 or later. Older clients are prompted to update.

**Guide advice:** turn the policy on before you assign the first Copilot seat. Then a developer can never send a prompt out of region by accident during rollout, and the 10% uplift is in your budget from day one.

## The questions legal will ask

| Question | Answer | Where it is written |
| --- | --- | --- |
| Is our code used to train models? | No. GitHub "will not use Inputs or Outputs to train generative AI models, unless you have given us documented instructions to do so." | [Generative AI Services Terms](https://github.com/customer-terms/github-generative-ai-services-terms), section 3 |
| Who owns the output? | "GitHub does not own Inputs or Outputs. You retain any ownership you already have in your Inputs." | Same terms, section 2 |
| Do model providers keep our prompts? | GitHub documents zero-data-retention agreements with the providers it hosts, and provider commitments not to train on customer business data. Check the page for each model you allow. | [Model hosting](https://docs.github.com/en/copilot/reference/ai-models/model-hosting) |
| Are we defended against IP claims on output? | For direct contracts, a defence of third-party claims in your Agreement also applies to Outputs. For purchases through Microsoft, the Customer Copyright Commitment in the Microsoft Product Terms applies. | Generative AI Services Terms, section 4; [Customer Copyright Commitment](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/customer-copyright-commitment) |
| Must we enable the duplicate-detection filter for that coverage? | No longer. As of 3 April 2026 there are "no additional required mitigations" for GitHub Offerings. The filter remains available. | Customer Copyright Commitment page |
| Which data protection terms apply? | The GitHub DPA. The Generative AI Services Terms apply it to Copilot unless your agreement includes a different one. | Generative AI Services Terms, introduction |

Since 5 March 2026, the Generative AI Services Terms replace the old Copilot Product Specific Terms for direct purchases. If you buy through Microsoft, the Microsoft Product Terms for GitHub Offerings apply instead. Make sure legal reviews the version that matches your contract.

**Guide advice:** the duplicate-detection filter is no longer a condition of the copyright commitment. Still consider blocking suggestions that match public code if your licence policy forbids copyleft code in proprietary products.

## Governance you can show an auditor

- **Policies:** decide which features are on, such as the cloud agent, code review, CLI and MCP servers, and which models are allowed, at enterprise level.
- **Audit log:** records settings and policy changes, seat changes and agent activity on the GitHub website. It keeps events for 180 days, so [stream it to your SIEM](https://docs.github.com/en/copilot/how-tos/administer-copilot/manage-for-enterprise/review-audit-logs). It "does not include client session data, such as the prompts a user sends to Copilot locally."
- **Metrics:** use [Copilot usage metrics](https://docs.github.com/en/copilot/concepts/copilot-metrics) to show adoption and to spot unexpected use.
- **Content exclusion:** stops Copilot from using chosen paths as context. GitHub is explicit that it "is not a filesystem security boundary" and that third-party MCP servers or clients may not respect it ([limits](https://docs.github.com/en/copilot/concepts/context/content-exclusion)).

## Configure every client for GHE.com

Developers must sign in to your subdomain, not github.com ([full steps per IDE](https://docs.github.com/en/enterprise-cloud@latest/copilot/how-tos/copilot-in-your-ide/set-up-copilot/authenticate-to-ghecom)):

```jsonc
// VS Code settings.json
"github-enterprise.uri": "https://SUBDOMAIN.ghe.com",
"github.copilot.advanced": { "authProvider": "github-enterprise" }
```

```bash
# Copilot CLI
copilot login --host SUBDOMAIN.ghe.com
```

JetBrains IDEs need Copilot plugin version 1.4.11 or later. Visual Studio, Xcode and Eclipse each have an enterprise sign-in setting.

## Worked example: the DPO's AI checklist

**Hypothetical scenario:** A logistics company's DPO must approve Copilot before rollout. The platform team brings five items:

1. A screenshot of the enabled residency policy, with the audit log event that recorded the change.
2. Sections 2 and 3 of the Generative AI Services Terms (ownership and no training), and the model-hosting page showing retention terms.
3. The list of allowed models, all from the EU list.
4. The audit log stream into the company SIEM, and a note that local prompts are not in the audit log.
5. A developer rule: no customer personal data pasted into prompts, enforced by training and content exclusion for the data fixtures folder.

The DPO approves, with a review in six months or when GitHub changes the residency page, whichever comes first.
