# Portal features selected for the public website

Reviewed 3 October 2026 against the source in `C:/Users/huien/inspro`. This is a source implementation review, not a verification of the deployed portal, a customer entitlement or a service-level commitment. The portal project was inspected read-only; no accounts, databases, client documents or portal files were changed or copied into the public site.

## Public positioning

Inspro combines employee self-service, specific HR administration tools and broker programme support. Explain the connected service through tasks people recognise. Do not claim competitors lack these capabilities, or use unsupported efficiency, accuracy, adoption or claims-settlement figures.

| Audience / feature | Public treatment | Source evidence in the portal project | Qualification |
| --- | --- | --- | --- |
| Employees: benefit statement, usage and flex balance | Lead feature; illustrative balance and record view | `frontend/src/routes/portal/coverage.tsx`; `frontend/src/components/portal/leaf/UsageLeaf.tsx`; `backend/app/api/v1/portal.py` (`/benefit-statement`, `/utilization`) | Programme and benefit limits apply; sample amounts are not offered benefits. |
| Employees: claim intake and document autofill | Claim feature copy, with document and status preview | `frontend/src/routes/portal/claims/new.tsx`; `frontend/src/components/portal/claims/AutofillCard.tsx`; `backend/app/api/v1/portal_claims.py` | Available where configured; employees must review the prefilled details. No instant-approval claim. |
| Employees: claim status, supporting documents and correspondence | Show a claim under review, with its conversation kept together | `frontend/src/routes/portal/claims/detail.tsx`; `frontend/src/components/portal/leaf/ThreadPane.tsx`; `backend/app/api/v1/portal_messages.py` | Claim decisions remain subject to applicable terms; a sample status is not a service promise. |
| Employees: panel clinics and digital cards | Show a simplified clinic/card preview | `frontend/src/components/portal/clinics/ClinicFinder.tsx`; `frontend/src/routes/portal/card.tsx`; `backend/app/api/v1/portal.py` (`/clinics`, `/cards`) | Panel, card and treatment access depend on cover. No clinic count or cashless guarantee. |
| Employees: benefit enrolment | Show review, selection and form-completion sequence | `frontend/src/routes/portal/enrollment.tsx`; `backend/app/api/v1/portal_enrollment.py` (`/elections`, `/form`, `/sign`) | Eligible options and an open enrolment period are required. |
| HR: delegated claims | Show claims submitted by HR for employees | `frontend/src/routes/hr/dashboard.tsx`; `backend/app/api/v1/hr_claims.py` | `_scope` restricts to HR-originated claims; ordinary HR is further restricted to its own submissions. Do not imply all employee claims are visible. |
| HR: filed enrolment forms | Show records with PDF, ZIP and Excel format labels | `frontend/src/routes/hr/enrollment-forms.tsx`; `backend/app/api/v1/hr_enrollment_forms.py` | Read and download only; broker review and acknowledgement remain with Inspro. |
| Inspro: programme configuration and coverage matching | Present as the broker service behind employer/employee tools | `frontend/src/components/shell/nav.ts`; `backend/app/api/v1/matches.py`; `backend/app/api/v1/enrollments.py`; `backend/app/api/v1/product_setups.py` | Do not present this as an HR self-service function. |
| Inspro: claim assessment and follow-up | Show supporting records and requests for missing information | `backend/app/api/v1/claims.py` (`/decision`, `/assessment`, `/messages`, `/send-to-insurer`) | No guaranteed insurer decision, automatic payment or settlement-time promise. |
| Inspro: programme reports | Show member, enrolment/flex and claims reporting | `frontend/src/routes/operations/reports.tsx`; `backend/app/api/v1/reports.py` | Broker-prepared reports within the agreed scope, not a promised HR analytics dashboard. |

## Excluded from public feature claims

- **HR employee roster and policy modules:** the current HR dashboard has no destination for these and displays “Coming soon”.
- **HR-wide claim visibility or HR form approval:** the implemented permission and acknowledgement boundaries do not support those descriptions.
- **Automatic claim approval, instant settlement, guaranteed savings, exclusive technology and compliance certifications:** not established by the source review.
- **Internal administration:** AI-provider settings, permissions, schema configuration, tenant details and internal processing pipelines do not help employers choose cover.
- **Unqualified features in all BenefitsCare plans:** the supplied product pricing remains indicative; a quotation confirms portal scope as well as insurance terms.

## Website changes

- New `/employee-benefits/portal/` page: role-based walkthrough, nine selectable feature previews, programme-fit links, three practical FAQs and a walkthrough enquiry.
- Home: replaces the generic larger-workforce teaser with a concise portal introduction and retains the corporate-benefits link.
- Corporate benefits: replaces unsupported HR dashboard generalisations with accurate employee, HR and broker responsibilities.
- BenefitsCare: adds an employee-experience link with quotation-dependent availability.
- Claims: distinguishes public-site information from the company portal used for claim documents; links directly to the claims preview.
- Services, shared navigation and footer: make the portal page findable without duplicating its full content.
- Contact: adds a walkthrough intent and an editable prefilled enquiry. The form still prepares an email draft only.

All previews are newly authored HTML/CSS, explicitly illustrative, with synthetic labels and sample balances. They are simplified feature demonstrations, not screenshots or live portal connections. No claim documents or personal information can be submitted through the showcase.

## SEO

The new page targets employee benefits portal / HR benefits administration intent for Singapore employers. Its title, description, canonical, Open Graph metadata, WebPage/Service/BreadcrumbList JSON-LD, sitemap entry and internal links are present in the static HTML. Product pages retain their distinct insurance intents. There are no fabricated reviews, ratings or SoftwareApplication offers.

Browser and build results are recorded in `PORTAL-SHOWCASE-VERIFICATION.md` after review.
