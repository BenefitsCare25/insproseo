---
name: Inspro
description: Burgundy insurance guidance with concise Manrope hierarchy, purposeful motion and distinct service presentations.
colors:
  accent: "#79272d"
  accent-hover: "#5e1d22"
  background: "#fbf7f6"
  foreground: "#55252a"
  surface: "#ffffff"
  muted-foreground: "#675054"
  border: "#dfcdd0"
  tint: "#fae9eb"
  accent-soft: "#f2dfe2"
  inverse: "#fffafa"
  inverse-muted: "#f0d8da"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(2.65rem, 5.4vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-.025em"
  compact-display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(2.3rem, 4.2vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-.025em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(1.8rem, 2.7vw, 2.7rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-.025em"
  panel-heading:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(1.65rem, 2.2vw, 2.15rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-.025em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.6vw, 1.55rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-.025em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: ".9rem"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: "normal"
  action:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: ".9rem"
    fontWeight: 700
    lineHeight: 1.65
    letterSpacing: "-.015em"
rounded:
  ds-radius-sm: ".5rem"
  ds-radius: "1rem"
  ds-radius-lg: "1.5rem"
  ds-pill: "999px"
spacing:
  ds-space-1: ".25rem"
  ds-space-2: ".5rem"
  ds-space-3: ".75rem"
  ds-space-4: "1rem"
  ds-space-5: "1.25rem"
  ds-space-6: "1.5rem"
  ds-space-8: "2rem"
  ds-space-10: "2.5rem"
  ds-space-12: "3rem"
  ds-space-16: "4rem"
  ds-gutter: "clamp(1.25rem, 4vw, 4rem)"
  ds-section: "clamp(3.5rem, 6vw, 6rem)"
  flow-section: "clamp(2rem, 4vw, 4rem)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.inverse}"
    typography: "{typography.action}"
    rounded: "{rounded.ds-radius-sm}"
    padding: ".8rem 1.2rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    typography: "{typography.action}"
    rounded: "{rounded.ds-radius-sm}"
    padding: ".8rem 1.2rem"
  button-outline-hover:
    backgroundColor: "{colors.tint}"
  button-inverse:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
    typography: "{typography.action}"
    rounded: "{rounded.ds-radius-sm}"
    padding: ".8rem 1.2rem"
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    typography: "{typography.body}"
    rounded: "{rounded.ds-radius-sm}"
    padding: ".75rem 1rem"
  topic-navigation:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.ds-radius}"
    padding: "1rem"
  topic-navigation-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.inverse}"
  topic-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.ds-radius}"
    padding: ".75rem"
  topic-chip-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.inverse}"
  link-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.ds-radius}"
    padding: "1rem"
  nested-tab:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.ds-radius-sm}"
    padding: ".75rem 1rem"
  nested-tab-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.inverse}"
  business-product-choice:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.ds-radius-sm}"
    padding: ".5rem .75rem"
  business-product-choice-selected:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.inverse}"
  business-policy-detail:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.ds-radius}"
    padding: ".75rem"
---

# Design System: Inspro

## Overview

**Creative North Star: "The Inspro Guide"**

Inspro's established world makes insurance guidance approachable and precise. Burgundy anchors decisions and emphasis; Manrope carries a confident sans-serif hierarchy; warm light stages give copy, photography and controls room to read. The owner rejected the earlier serif editorial direction. The current identity uses concise guidance, responsive controls and purposeful motion while keeping each service's presentation suited to its content.

The system combines photographic introductions, open diagrams, tonal detail surfaces and local interface previews. Motion explains a selection or introduces a scene, then settles into readable content. The completed homepage cinematic, static/mobile fallback and horizontal product rail retain their own structure, assets and scroll behavior. Surface composition belongs in the [homepage brief](.impeccable/surfaces/site-index-html.md), [Employee Benefits brief](.impeccable/surfaces/employee-benefits.md), [Business Insurance brief](.impeccable/surfaces/business-insurance.md), [Personal Insurance brief](.impeccable/surfaces/personal-insurance.md), [BenefitsCare brief](.impeccable/surfaces/site-employee-benefits-benefitscare-index-html.md) and existing [About Us brief](.impeccable/surfaces/about-us.md), rather than becoming a template for every page.

Recorded from the final local source on 11 October 2026, with the completed BenefitsCare extension merged into the existing system. [PRODUCT.md](PRODUCT.md) retains product truth and the approved service glossary. [Current verification](docs/VERIFICATION.md) records the checked behavior and launch limits. The normative CSS values live in [tokens.css](site/assets/css/tokens.css); the frontmatter captures its reusable primitives, and [.impeccable/design.json](.impeccable/design.json) carries extensions and component previews.

BenefitsCare adds connected service and benefit diagrams within this established world. Stationary labels, native choices and automatic repeating path highlights keep the relationships readable. The owner's latest refinement gives every active card equal responsive dimensions and compact content; its service rows, plan feature grids and illustrative employee tools remain specific to that product surface.

Travel Insurance adds a compact journey introduction, three equal intrinsic topic cards and all-visible insurer choices within the quote chapter. Geometric outbound/return routes, itinerary inputs and employee-trip connections use stationary labels and automatic (6.4s) loops. The [Travel brief](.impeccable/surfaces/site-service-details-personal-travel-insurance-index-html.md) and [verification](docs/TRAVEL-VERIFICATION.md) retain the scoped referrals, business context and reading alternatives.

Claims Support adds a contact-first help brief and three equal intrinsic topics within the same world. Four authored geometric scenes show records and correspondence, policy preparation, a programme phone and a question/reply exchange. Stationary native captions accompany coordinated (7.6s) phases. Shared navigation uses the owner's title-case labels, including Claims Support and About Us. The [Claims brief](.impeccable/surfaces/site-claims-support-index-html.md) and [verification](docs/CLAIMS-VERIFICATION.md) retain the corrected scene review, global-label scope and reading limits.

About Us extends only the five company cards while protecting its existing introduction, photograph and facts. Compact rose reading stages, four small purpose-specific figures and meaningful pictograms beside the native TACT descriptions retain the incumbent world. The [About brief](.impeccable/surfaces/about-us.md) and [verification](docs/ABOUT-CARDS-VERIFICATION.md) record natural narrow-card sizing, coordinated (8.2s) motion and the bounded owner-correction verdict.

**Key Characteristics:**

- Burgundy decisions on warm, readable light surfaces.
- Confident Manrope headings and restrained supporting type.
- Distinct presentations shaped by the information they explain.
- Quiet selected states and visible keyboard focus.
- Interruptible motion with complete reading alternatives.

## Colors

The palette pairs Inspro Burgundy with rose-tinted neutrals and white paper; tonal contrast carries hierarchy without introducing a second accent.

### Primary

- **Inspro Burgundy** (`accent`): key actions, selected topics, selected plans, meaningful diagrams and the footer.
- **Deep Burgundy** (`accent-hover`): hover feedback on selected controls and primary actions.

### Neutral

- **Warm Wash** (`background`): shared reading stages and quiet field backgrounds.
- **Burgundy Ink** (`foreground`): headings and principal copy on light surfaces.
- **White Paper** (`surface`): detail containers, controls and elevated interface surfaces.
- **Muted Rose Ink** (`muted-foreground`): supporting copy and unselected secondary information.
- **Soft Rose Line** (`border`): functional dividers, input strokes and diagram connections.
- **Rose Tint** (`tint`): gentle hover and grouped-content emphasis.
- **Soft Focus Rose** (`accent-soft`): field focus glow and text selection.
- **Warm Inverse** (`inverse`): readable labels and copy on burgundy.
- **Soft Inverse** (`inverse-muted`): supporting copy on burgundy surfaces.

**The One Palette Rule.** Add or change colors in the canonical semantic tokens; component styles use those tokens.

The existing cinematic has separate dark, glass and image-overlay tokens. They remain local to that protected experience and do not establish another palette for service content. Sidecar tonal ramps are synthesized preview metadata, not additional shipping color tokens.

## Typography

**Display Font:** Manrope, with Arial and sans-serif fallbacks.  
**Body Font:** Manrope, with Arial and sans-serif fallbacks.  
**Label Font:** Manrope; service content has no distinct display or mono label face.

**Character:** Strong, closely tracked headings establish a clear entry point. Regular body copy, compact labels and selective strong weights keep dense insurance information readable.

### Hierarchy

- **Display:** the bold featured-introduction ramp; used by photographic flagships, product introductions and other prominent entry points.
- **Compact display:** the smaller entry-point ramp used by compact product and guide introductions in the enhanced reading flow.
- **Headline:** the standard section-heading ramp outside compact stages.
- **Panel heading:** the shared topic-stage heading ramp, with balanced wrapping.
- **Title:** detail-group headings; individual compositions can use the body scale for compact link or tool titles.
- **Body:** regular reading copy, with a shared measure of (68ch) where the layout permits.
- **Label:** topic labels and compact controls; normal case and readable wrapping.
- **Action:** stronger button labels within the same sans-serif family.

Supporting copy also uses the existing small and caption tokens. Route-specific introductory and homepage sizes remain contextual variations, not replacement type systems.

Claims scene captions use native HTML outside the SVG scaling, with the existing small-text token (.9rem, 14.4px) and loaded Manrope. Their label positions remain still while the illustrated objects assemble and exchange documents; caption scale does not shrink with the drawing.

Guide articles also retain local fluid editorial headings, sequence numerals, SVG-coordinate labels and print sizes. These are surface-specific adaptations of Manrope; body copy and controls continue to use the shared semantic type variables. Detector type advisories do not establish a new global ramp.

**The Manrope Guidance Rule.** New service content inherits Manrope and the shared type roles; preserve the protected cinematic's independent typography.

## Layout

Portal Preview keeps a common exhibit width while each active task follows its own natural height at every viewport. Inactive roles, features, menus and nested previews leave layout flow. Its desktop feature rail and heading-row role tabs stack at (48rem); shorter metrics, receipts, documents and grouped enrolment controls keep the workspace compact. At (24rem) and below, metric cards use a single horizontal row and selection figures scale within their region. This scoped owner refinement supersedes the portal's earlier equal-height interpretation without changing other pages' confirmed frame rules.

The standard content shell uses responsive side gutters and a maximum width of (80rem). The header retains its narrower existing shell. Reused spacing follows the quarter-rem scale in the frontmatter; reading stages use tighter spacing than full introductory sections.

The enhanced topic explorer places a sticky rail beside a single active reading stage. Its shared rail width ranges from (13rem) to (16rem), with a (1.5rem) gap. At the intermediate rail breakpoint of (60rem), the rail becomes (14rem) wide and the gap tightens to (1rem). At (48rem) and below, navigation becomes a horizontally scrolling row of chips above the content. Chips retain readable multi-line labels, no scroll snapping, and instant repositioning when the selected chip would otherwise be outside the rail.

Reading-stage padding follows the shared responsive token, with the mobile stage using (1.25rem). Cards and comparison groups reflow from columns to stacked content as space narrows. Full content remains in static HTML; runtime enhancement moves the existing sections into the explorer and selects them without fetching replacement copy. Existing section IDs still open the correct topic.

There are no visible Previous/Next controls, Read all sections actions, counters, topic numbers or explorer titles. Internal expansion supports catalogue filtering and print. The equal responsive frames on Employee Benefits, Business Insurance and Personal Insurance, and the homepage's equal desktop panels, are recorded in their surface briefs; other topic explorers retain sizing appropriate to their contents.

Every enhanced BenefitsCare active card shares the same responsive width and height. Inactive topic and nested-choice views remain in the sizing grid while hidden, inert and unavailable to interaction; the largest compact content sets the common frame, and an opened native question can grow it. One active-plan price group is centered within the left column beside an icon-only graphic, with a full-width two-column feature grid below. Plans and quotation place a plain Review arrow link at the top right of the heading row. Plan, feature, hero and tool columns stack at (48rem); optional and quotation layouts stack at (60rem). The service network retains five stationary rows connected to mobile access as space narrows. These product-specific arrangements preserve normal padding and complete content without fixed-height clipping.

Travel's three enhanced topic cards also share an intrinsic responsive frame. Every insurer option remains visible in the quote card; the other cards present itinerary checks and employee-trip preparation. The hero and business layout stack at (48rem), while quote actions reposition beneath their descriptions at (64rem). Exact measured frame sizes belong to the [Travel verification record](docs/TRAVEL-VERIFICATION.md), not to fixed height tokens.

Claims Support uses three equal intrinsic topic frames after its contact-first hero. Reporting steps, programme guidance and native questions retain distinct arrangements; shorter content keeps the common frame without filler. Programme art stacks above full-width guidance at (56rem), before the hero and other card columns stack at (48rem). Heading actions move below the introduction on phones. Removing the two redundant card-footer sentences reduces the natural common height without a fixed height or clipped content. Measured frame dimensions remain verification values rather than sizing tokens.

About Us keeps a common intrinsic frame above (64rem). At (64rem) and below, each card follows its own content height; four small decorative figures share the heading row while full-width native copy follows beneath. Inactive topics leave this narrow sizing flow. At (48rem), the graphic column narrows and the TACT list becomes one column. These card-only choices preserve the existing upper page and avoid stretching the shorter vision to verification content; measured heights remain verification observations.

Open guide articles use a narrower (76rem) shell. The renewal worksheet pairs a sticky (14rem) section rail with continuously visible content; at (1,000px) and below the rail and progress return to document flow, with navigation compacting again at (760px). This open reading pattern complements the topic explorer where an article benefits from uninterrupted reading.

## Elevation & Depth

The system uses tonal layering for most reading content. Shared topic stages, topic controls and compact link cards are flat at rest. White paper against Warm Wash establishes a group; burgundy establishes meaningful emphasis. Selected controls use color rather than a large shadow or an enclosing panel outline. Existing photographic layers, interface previews and some action hover states retain soft elevation where their composition calls for it.

### Shadow Vocabulary

- **Soft surface:** `--ds-shadow` (`0 1rem 3rem rgb(85 37 42 / .09)`), for supporting surfaces and permitted hover feedback.
- **Action hover:** `--ds-shadow-hover` (`0 1.25rem 3.5rem rgb(85 37 42 / .14)`), for raised button hover feedback.
- **Photographic panel:** `--ds-panel-shadow` (`0 1.5rem 4rem rgb(85 37 42 / .12)`), for existing layered photographic/interface compositions.

**The Functional Depth Rule.** Shared reading stages stay flat; use the existing soft shadows only for the action or layered surface that calls for them.

## Shapes

The form language uses gently curved controls, larger rounded reading surfaces and circular diagram symbols. The shared small, standard and large radii are normative in the frontmatter. Pills are reserved for existing chips and round symbols; not every container becomes a pill.

Borders describe inputs, dividers or meaningful diagram links. Decorative directional accent borders are excluded. Open diagrams and justified overlaps show relationships; they are surface-specific compositions, not a required card shape. SVG symbols retain the incumbent Lucide path language, consistent thin strokes and token-based sizing.

## Components

### Buttons

Confident, compact actions with direct labels.

Primary buttons use Inspro Burgundy with light text, the shared small radius, control padding and a minimum height of (3rem). The outline variant uses White Paper with Burgundy Ink and a functional line border; its hover turns to Rose Tint. The inverse treatment appears on selected plans and other burgundy content surfaces, using White Paper and a burgundy label.

Hover uses the existing deep accent, soft action shadow and a slight upward shift. Keyboard focus remains explicit; dark surfaces use a light focus outline. Disabled actions lose their hover lift and shadow. The smaller homepage actions remain a surface-specific adaptation.

### Chips

Readable topic choices on mobile.

Mobile topic chips use the same white/burgundy selection language as the desktop rail, a shared standard radius and a minimum height of (3.25rem). Their width follows the label within the viewport. Hover changes the surface; selected hover deepens the burgundy. Keyboard focus stays inside the chip.

### Cards / Containers

Quiet grouping with purposeful content.

The shared reading stage uses Warm Wash, the standard radius and responsive padding with no border or shadow. White detail containers use the shared radius and spacing scale. Compact link cards use an icon, a readable title, supporting copy and an inline SVG destination arrow; the whole card is the link target. Hover adds tonal feedback without lifting compact cards. Keyboard focus uses the inset control treatment.

Photography and route-specific detail compositions retain their own crops, overlaps and layout. Do not replace those differences with one repeated row template.

### Inputs / Fields

Labelled, calm controls for preparing an enquiry.

Inputs, selects and textareas use Warm Wash, Burgundy Ink, the small radius and a functional line border. Focus changes the background to White Paper and the border to burgundy; the existing field focus glow remains visible. Labels stay visible, required fields retain browser validation, and textareas can resize vertically. The catalogue search field applies its focus treatment to the containing search surface.

The form prepares an email in the visitor's configured email application after validation. Its status copy describes that handoff; it does not imply that the website sent or stored the enquiry.

### Navigation

Selection and keyboard focus are separate states.

**The Navigation Name Rule.** Use title-case navigation, footer groups, breadcrumb names and topic labels while preserving canonical service names and destinations. Claims Support replaces Claims Help; About Us replaces About. Keep Insurance Solutions, Travel Insurance and Portal Preview consistent across source HTML and enhanced navigation.

Topic navigation uses white, rounded controls with an inline SVG symbol and normal-case labels. The selected topic becomes burgundy with light text and a small check symbol. Topics use tab/tabpanel relationships, a roving tab stop, arrow keys, Home and End. Mobile changes the orientation and scroll position while preserving the same topic order.

**The Quiet Focus Rule.** Topic and nested controls use an inset keyboard outline (2px, offset −4px), changing to light on burgundy selection. The content panel itself has no enclosing focus or selection outline.

Nested plan, risk and portal controls use the same selection language, with their established semantics. Buttons expose pressed state where appropriate; tab controls expose selected state. Policy-year milestones and role tools retain the behavior documented in the Employee Benefits brief.

Native product choices use labelled pressed-state buttons and controlled regions, with inactive content hidden and inert. The displayed explanation and contextual action retain the same product correspondence, including expanded reading modes. Their content and compositions are recorded in the Business and Personal surface briefs.

The global header's Insurance solutions menu links directly to four real pages: Employee Benefits (Life & Medical), Business Insurance, Personal Insurance and BenefitsCare for SME. Business Insurance opens its integrated primary page at `/service-details/commercial/commercialoffice-package/`. The retired services overview and separate commercial product directory are absent; neither has a replacement overview or a redirect. Mobile keeps readable labels, explicit menu controls and Escape closure. The supplied transparent footer logo keeps its original pixels and has no white backing.

Product-card enquiry actions retain the visible label **Review** and open Contact with the selected service, topic and BenefitsCare plan. BenefitsCare uses plain Review arrow links in its plan and quotation headings. Their label and context stay consistent during hydration and selection. Travel entry labels and quotation actions retain their existing wording. The retained Guides library links to the Insurance Review Checklist and SME Employee Insurance guide; retired detail guides have no active reading surface.

### Business Product Choices & Policy Details

Pressed-state choices connect each product to its explanation and action.

The Business page uses labelled button groups with `aria-pressed` and `aria-controls`, transparent unselected choices, burgundy selection, Rose Tint hover, the shared small radius and quiet inset focus. Product choices are at least (44px) high. Arrow keys, Home and End select and focus a choice; each controlled article pairs a meaningful detail heading and product-specific scope with its corresponding Review action to Contact, while Business travel retains its Travel Insurance link. Inactive articles are invisible, inert and excluded from the accessibility state while preserving intrinsic sizing.

Foreign-worker medical insurance and security bonds occupy two independent requirement columns within the White Paper explanatory surface. Each has its own explanatory diagram, description and contextual Review action to Contact. Complete actions remain contained on mobile, with a non-shrinking SVG arrow and at least (44px) action height. The sidecar previews the current choices, a property explanation excerpt and these two distinct requirements. The Business card topology, equal frames, content inventory and original scene motion remain in the [Business surface brief](.impeccable/surfaces/business-insurance.md).

### BenefitsCare Connections & Native Choices

Connected service areas and cumulative benefit layers make programme relationships visible.

The standalone product introduction connects five stationary service rows—Insurance, Flexible benefits, Medical services, Lifestyle and Wellness—to mobile access. Thin semantic paths, white symbols and stationary Manrope labels extend the existing diagram language. Name-only plan tabs identify the selection. Its single vertical price group is centered in the left column beneath the Starter tab; an icon-only graphic occupies the adjacent column. The same comparison rows span the full width below in two columns, becoming one column on mobile, with unavailable benefits explicitly marked by normal-opacity Not included statuses. Plan and optional graphics carry no repeated text labels. The active plan name is not repeated in the enhanced body, but remains visible in static HTML and print. Scheme coordination, optional benefits and the illustrative employee interface retain distinct path compositions. Quotation preparation uses a compact brief and native questions without an illustration, reducing the shared frame at the owner's request. These compositions preserve the brand palette and introduce no raster imagery or global shape requirement.

**The BenefitsCare Plan Rule.** Plan tabs carry names only. The selected view shows one vertical price group, centered inside the left column on desktop and the stacked column on mobile. Benefit names and descriptions appear once in its full-width feature grid. Keep the same comparison rows across plans and mark unavailable benefits explicitly. Use a plain Review arrow link at the top right of both the plan and quotation headings. The plan link follows the selected tier after enhancement and remains a generic BenefitsCare enquiry without JavaScript; omit the former bottom qualifier and solid action row.

**The Stationary Label Rule.** BenefitsCare labels and icons stay outside animated path targets. Automatic highlights repeat along service connections while content remains still. Motion suspends when the view is inactive, offscreen, hidden, printing, leaving the page or using reduced motion; the complete static diagram remains readable.

The hero repeats on a (6.4s) cycle, and eight card views—Starter, Flex, Premier, Insurance, Flex & wellness, Lifestyle, Scheme features and Employee & HR tools—use (5.6s) cycles. Small linear path highlights provide continuous connection cues with no pause buttons, bouncing text, rotating icons or large pulsing centre. Quotation is the owner-requested static exception. This BenefitsCare loop treatment supersedes its earlier finite entrance motion and remains scoped to the product.

Native plan and optional-service tabs use White Paper for unselected choices, burgundy with Warm Inverse for selection, shared small corners and quiet inset control focus. ArrowLeft, ArrowRight, Home and End select and focus a tab. The selected nested tabpanel is a keyboard focus stop; inactive panels are hidden, inert and removed from the tab sequence. Its explicit outer focus outline (3px, offset 3px) is a BenefitsCare-specific exception to the shared topic-panel focus treatment above. Selection, benefit description and the plan-specific **Review** action to Contact retain the same correspondence.

Five native questions are emitted open in static HTML, then closed only during enhancement. Print expands all five topics, three plans, three optional-service views and every answer, suspends graphic motion, then restores the selected views and disclosure states. Static HTML retains all reading content without JavaScript. Visible and structured breadcrumbs read Home → BenefitsCare for SME. The local Business/Personal Insurance redirects and Employee/HR preview-tool links are removed; the larger-workforce answer stays within BenefitsCare. The site's global navigation remains shared. The [BenefitsCare brief](.impeccable/surfaces/site-employee-benefits-benefitscare-index-html.md) and [verification record](docs/BENEFITSCARE-VERIFICATION.md) retain the exact inventory, loop timings, checked states and review limits; the pattern does not prescribe these diagrams or navigation choices for other routes.

### Travel Journey & Insurer Referrals

Travel Insurance gives personal travellers and employers one compact journey introduction, followed by three equal intrinsic topic cards: Personal travel quotes, Before you buy and Business travel. The hero pairs concise copy and two chapter actions with an outbound-and-return SVG. All three insurer choices remain visible together within the quote chapter, each with its distinct description and plain arrow link. Shared topic navigation and quiet selection continue to use the existing control system.

**The Travel Referral Rule.** Keep every insurer option visible within the quote chapter, preserve its exact action label and referral URL, and keep business enquiries in the Business Insurance context. Insurers confirm eligibility, premiums and policy terms; a referral or email draft does not establish cover.

Insurer and business links have a minimum height of (2.75rem), explicit keyboard focus and restrained arrow feedback. The business enquiry sits beside its heading at the top right on desktop, then stacks below the introduction at (48rem) and below. Quote rows reposition their actions below the copy at (64rem); on phones, descriptions and actions use the full row. Comparison prompts reflow from two columns to one, while the business diagram and its three preparation prompts stack without fixed-height clipping. Inactive chapters still contribute to the common frame while hidden, inert and unavailable to interaction.

Four geometric scenes use the same thin route language: outbound and return travel, departure and return checkpoints, itinerary and traveller inputs, and employee/work-purpose connections. Labels and endpoints stay stationary; path highlights and the hero plane repeat on (6.4s) cycles without pause controls. The controller requires (15%) intersection and settles on inactive, offscreen, hidden, reduced-motion, print and pagehide states; persisted pages reobserve their scenes. Unsupported motion environments retain the complete static artwork. Static HTML keeps every chapter readable without JavaScript; print exposes all chapters and removes decorative diagrams, then restores the selected chapter.

Travel preserves Home → Personal Insurance → Travel Insurance breadcrumbs, the existing three chapter anchors, the MSIG TravelEasy, MSIG TravelEasy Pre-Ex and FWD destinations, claims support and the corporate-travel enquiry context. The [Travel surface brief](.impeccable/surfaces/site-service-details-personal-travel-insurance-index-html.md) and [verification record](docs/TRAVEL-VERIFICATION.md) retain the exact labels, source, checks and review scope. This journey composition extends the existing world without replacing its palette, type ramp or other service presentations.

### Claims Support Channels & Native Questions

Claims Support places direct phone and email actions before reporting guidance, beside records, a broker correspondence window and insurer geometry. Its unchanged introduction uses balanced wrapping instead of an isolated final word. Three topics remain What To Do First, Benefits Programme and Common Questions. Plain Get Support and Preview Portal Claims arrows sit at the top right of desktop headings, have a minimum height of (2.75rem), and move below the introduction at (48rem). They retain the Claims enquiry and qualified feature-preview destinations.

**The Claims Channel Rule.** Show direct phone and email before reporting guidance and retain their actual linked values in print. Separate broker assistance from insurer assessment, an enquiry from claim lodging, and the employer's programme channel from a feature preview.

Four distinct geometric scenes use authored (7.6s) repeating phases: records reach the broker and insurer before correspondence returns; policy sheets gather into a folder before a support response; a substantial programme phone reveals document and message rows before external follow-up; an envelope opens into a question/reply exchange. Packet travel, eased layer arrivals, route reveals and brief complete states share one phase clock. Native captions and guidance stay stationary; there are no pause or Replay buttons. The shared Travel/Claims lifecycle controller retains its (15%) intersection threshold and cancels every track for inactive, hidden or offscreen views, reduced motion, print and pagehide. Cancellation restores the complete static scene; persisted pages reobserve. Travel retains its separate (6.4s) default routes. The verification record distinguishes simulated lifecycle events from actual browser cache behavior.

The three original questions keep their exact answers and native details/summary semantics. Enhanced reading uses the existing row-and-divider treatment and one open answer per group; native fallback retains full-perimeter question cards with all answers emitted open. Print exposes all topics and answers, removes decorative scenes and shows linked phone/email through a print-only line that takes no screen space. After printing, topic and question state return. The [Claims verification record](docs/CLAIMS-VERIFICATION.md) preserves the owner-triggered full review, corrected visual verdict, retained print contacts and local-browser limits.

### About Us Editorial Cards & TACT

Five company topics retain their exact order, anchors and original corporate statements. The existing rail/mobile chips select a compact rose reading stage. A compass supports vision; policy/service sheets support mission; a document and magnifier explain help; records and real contact channels support verification. The introduction, original photograph, company-facts block, header and footer stay protected.

**The About Values Rule.** Keep each TACT pictogram beside its native value name and description. Sequence the icon geometry and quiet field emphasis while the text stays still; the complete value list remains readable when motion stops.

TACT integrates people joining, a responsibility checklist, customer-focus brackets and a trust shield into the actual four native descriptions. The list has no separate abstract values diagram or duplicated captions. Five scene groups repeat automatically on (8.2s) cycles without pause/replay controls; the values group coordinates ten geometry/emphasis tracks on one clock. Static underlays preserve complete pictograms while overlays trace or gather. All official copy stays stationary; decorative art does not claim real status or approval.

The shared route lifecycle requires (15%) intersection and an active visible panel. Inactive, offscreen, hidden, reduced-motion, print and pagehide states cancel to complete static artwork; persisted pages reobserve. All five topics and actual verification/contact links remain in native HTML. Print shows every statement, removes decorative figures/icons and restores the selected topic. The [About verification record](docs/ABOUT-CARDS-VERIFICATION.md) distinguishes dated repetition evidence, current focused reflow checks and the accepted bounded visual verdict.

### Portal Preview Task Workspaces

A compact product exhibit explains each role's actual task within the existing burgundy, warm-paper and Manrope system. Nine native demonstrations sit behind Employees, HR teams and Inspro support choices. The active heading and role tabs share the desktop row; the title/icon, sample badge, pause control and repeated descriptions remain removed. Native questions beneath the exhibit retain the programme, access and illustrative-data qualifications.

**The Portal Task Fit Rule.** Within Portal Preview, every active workspace follows its own content height at every width. Inactive roles, features, menus and nested previews leave flow. Keep matching in one employer-record-to-benefit-schedule workspace with eligibility checks grouped below; keep enrolment's selection graphic beside its selected benefits and group review controls. Preserve compact spacing and common widths without stretching unrelated tasks to a shared height.

Role tabs, feature choices and sample controls use semantic surfaces, burgundy selection and explicit keyboard focus. Task-specific maps, receipts, credentials, schedules and reports retain stationary native labels. Decorative tracks and visual counters repeat on (7.2s) clocks; counters use the first (28%) to count and hold final values, with stable accessible labels. Inactive/offscreen/hidden, pagehide, print and reduced-motion states pause motion; live preference changes retain complete static reading. Static HTML preserves all tasks, and print exposes nested previews sequentially before restoring selection. The [Portal brief](.impeccable/surfaces/portal-preview.md) and [verification](docs/PORTAL-PREVIEW-VERIFICATION.md) retain source limits and the current full review. These sample choices do not submit, download or connect accounts.

### Guides Directory Editorial Previews

Two open reading spreads make the next guide choice clear.

The `/guides/` directory alternates a burgundy renewal figure and a rose employee-cover figure alongside concise copy. Each retained guide has one explicit reading link; one **Review** action opens Contact. Figures use existing semantic tokens, the local `--gd-art-radius` of (1.25rem), fluid Manrope headings and a (76rem) shell. The spreads stack at (1,000px) and below; compact SVG coordinates at (600px) and below keep labels readable on phones. These choices belong to the [directory surface brief](.impeccable/surfaces/site-guides-index-html.md), not the shared frontmatter scales.

Per the owner's motion steering, these decorative scenes repeat on (5.2s) cycles with a settled interval and no Replay controls. Papers, routes and checks move; all (19) SVG labels sit outside animated groups. Below (25%) intersection, in the background, for reduced motion/print and on page exit, effects cancel to the complete readable state. Static HTML contains the final diagrams, labels and links, while no-JavaScript mobile navigation remains in document flow. This directory-specific loop pattern extends the finite entry/state motion elsewhere. The [verification record](docs/GUIDES-DIRECTORY-VERIFICATION.md) documents the final source, captures and one-fix review verdict at its earlier handoff. Both retained article redesigns subsequently completed; their patterns are recorded below.

### Shared Guide Articles & Renewal Worksheet

Open reading content with a small native preparation task.

The shared article shell pairs a concise introduction and subject-specific SVG, then keeps every article section visible in semantic document order. Use real section anchors, normal reading links and one relevant Contact handoff. The renewal surface has four stages, twelve native labelled checks, one SME reading link and one **Review** action. Warm paper, full perimeter checkbox borders and rose checked states use the existing tokens; article styles introduce no shadows or glows. Keyboard focus on article links, buttons and inputs uses an explicit (2px) outline with (4px) offset.

**The Open Article Rule.** Guide article content stays continuously visible. Native labelled checks may enhance preparation with an honest current-page count; essential reading and checks remain usable without JavaScript. Progress does not imply saved or submitted work, and print reuses the existing single handler. Native employer questions retain browser keyboard behavior; print exposes all answers with and without JavaScript.

The checklist count is a temporary (0–12) enhancement. Shared article artwork repeats decorative strokes, marks and symbols on (5.8s) CSS cycles, with stationary labels and no Replay controls. The controller requires (25%) intersection and settles for hidden, reduced-motion, print and pagehide states. Default SVG artwork is complete without scripting. These loop, worksheet and article-type values belong to the surface, not the normative frontmatter. The [checklist direction](.impeccable/renewal-checklist-20261010/direction.md) and [verification record](docs/RENEWAL-CHECKLIST-VERIFICATION.md) retain the scope and evidence.

### SME Guide Cover Purposes & Native Questions

Distinct responsibilities in an open reading flow.

The SME article extends the shared (76rem) guide shell with a burgundy workforce diagram, four open cover explanations, a rose quotation stage and native employer questions. Each cover pairs its purpose with **Your workforce** and **Before you quote** prompts; open rows and definition lists replace the former sideways comparison table. The main reading grid stacks at (1,000px); at (760px), cover rows become one column and the six-link section navigation uses two columns. Body copy, controls, surfaces, perimeter FAQ borders and focus use existing semantic tokens. Local heading sizes and SVG-coordinate labels are surface variations, not new frontmatter primitives; no shadow, glow, raster asset or dependency is introduced.

The stationary workforce centre and cover labels remain outside animated targets. Only route strokes and cover-symbol emphasis repeat on the shared (5.8s) cycles, with no Replay; the controller requires (25%) intersection and stops for hidden, reduced-motion, print and page-exit states. The native SVG's accessible title and description explain that cover relevance depends on the workforce. Its complete static diagram and all article content are available before scripting.

Three native questions retain browser keyboard behavior, with the first open initially. Warm Wash marks an open question; its summary uses an explicit (2px) keyboard outline with (5px) offset and a rotating semantic arrow. Print exposes every answer through native details-content styling, including without JavaScript. The final policy note uses the small-text token and an (80ch) measure. One **Review** action opens Contact with benefits review context; one renewal reading action and two inline existing-product destinations complete the article. The [SME surface brief](.impeccable/surfaces/guides-sme-employee-insurance-singapore-index-html.md), [direction](.impeccable/sme-guide-20261010/direction.md) and [verification](docs/SME-EMPLOYEE-GUIDE-VERIFICATION.md) retain the composition, source truth and measured limits. This pattern does not prescribe a workforce diagram or FAQ composition for unrelated pages.

### Retired Public Liability Guide Pattern

Historical record from the earlier local build on 10 October 2026. The Public Liability guide, route assets and generator are retired under the later guide-cleanup instruction; its former URL redirects to the corresponding Contact context. The [archived surface brief](.impeccable/surfaces/s-commercial-public-liability-insurance-index-html.md) and [verification](docs/PUBLIC-LIABILITY-GUIDE-VERIFICATION.md) preserve this scoped pattern and evidence. It is not an active component requirement or an outstanding review gate.

Open semantic SVG diagrams pair each chosen business activity or policy term with its corresponding explanation. They inherit the shared burgundy/rose palette, Manrope hierarchy, thin functional connections, white detail surfaces and quiet inset control focus. Labelled pressed-state buttons synchronize the controlled view's visibility and inert state; keyboard arrows, Home and End select and focus the matching choice. Motion follows the actual subject path or reveals a policy relationship, finishes cleanly and settles when a view is hidden, the page is backgrounded, reduced motion is enabled or printing begins.

Side-by-side diagrams and copy stack as space narrows; the policy-distinction diagram reflows labels for phones. Intrinsic frames preserve selection stability while allowing open FAQ content to grow. Essential diagrams and text exist in static HTML, native questions remain operable without JavaScript, and print expands every choice/question before restoring the screen state. These are scoped behavior patterns, not new global layout or token rules; the existing token/component sidecar remains unchanged.

### Native Questions

Question groups use native details and summary controls. The shared controller closes the previous answer when another opens, including rapid pointer or keyboard activation, while keeping separate groups independent. Navigation and other flow disclosures retain their existing behavior.

**The One Open Question Rule.** On enhanced pages, opening a question closes the previous answer in that question group. Groups remain independent. Print exposes every answer and restores the prior open state afterward. Without JavaScript, retain the original native disclosure reading.

The current shared behavior applies to the question groups on BenefitsCare, Claims Support, the Employee Benefits portal and the SME employee-insurance guide. The [BenefitsCare verification record](docs/BENEFITSCARE-VERIFICATION.md) retains the exact checked routes, print restoration and fallback scope.

### Motion & Reading Alternatives

Motion makes a state change understandable and finishes cleanly.

Shared topic entries use short, directional heading/copy movement and restrained content staggering. Photographic or diagram scenes reveal once when they enter view; manually selecting a new topic introduces its content. Previous effects finish before a rapid selection proceeds. Timings and easing are recorded as sidecar extensions, while content-specific branch, cover, role and milestone motion remains in the surface brief.

**The Complete Reading Rule.** Essential content is readable before enhancement. Reduced motion skips entrance effects and finishes or cancels active effects when the preference changes. Print expands every topic and nested detail, finishes effects, then restores the screen's selection afterward.

## Do's and Don'ts

### Do:

- **Do** use the shared semantic palette and spacing tokens for recurring components.
- **Do** let each route's information determine its composition while retaining Manrope and the common control states.
- **Do** pair burgundy selection with the quiet inset keyboard focus on topic and nested controls.
- **Do** preserve existing section IDs, meaningful links and the static reading order when enhancing a page.
- **Do** keep motion interruptible and provide complete reduced-motion, no-JavaScript and print reading alternatives.
- **Do** preserve the supplied transparent logo and the protected homepage cinematic, mobile fallback and product rail.

### Don't:

- **Don't** restore the owner-rejected serif editorial system.
- **Don't** add decorative directional accent borders.
- **Don't** frame an entire content panel as the selected or focused control.
- **Don't** hide essential product information behind an animation or JavaScript-only reveal.
- **Don't** present illustrative AI imagery as photographs of Inspro staff, clients or offices.
- **Don't** turn a page's distinct diagram, overlap, equal frame or photographic composition into a site-wide template.
