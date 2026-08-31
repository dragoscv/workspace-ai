---
paths:
  - "**/messages/**"
  - "**/locales/**"
  - "**/i18n/**"
  - "**/*.{ro,en}.json"
  - "**/tax-ro/**"
  - "**/efactura/**"
---

# Internationalization & Romanian Localization

## i18n Engine
- Use **next-intl** for all user-facing strings; no hardcoded copy in components
- Keys are namespaced and semantic (`invoice.status.paid`), not English sentences
- Default locale **ro**, with **en** as secondary; structure for easy locale addition
- Pluralization and gender via ICU message format; never string-concatenate translated fragments
- Keep message catalogs in sync; fail CI on missing keys for a shipped locale

## Romanian Formatting
- **Currency**: RON formatted as `1.234,56 lei` (dot thousands, comma decimal) via `Intl.NumberFormat('ro-RO', { style: 'currency', currency: 'RON' })`
- **Numbers**: comma decimal separator, dot (or thin space) for thousands
- **Dates**: `zz.ll.aaaa` (e.g. `16.06.2026`); use `Intl`/date-fns with `ro` locale; store UTC, render local
- **Time zone**: `Europe/Bucharest` (EET/EEST) for display; never assume server TZ
- Romanian diacritics required: ă, â, î, ș, ț (comma-below, U+0218/U+021A — not cedilla); ensure fonts and DB collation support them

## Business & Fiscal Terms (use correct RO terminology)
- factură (invoice), aviz (delivery note), chitanță (receipt), proformă, storno (credit note/reversal)
- CUI/CIF (tax id), CNP (personal id), nr. ORC / J (trade registry), cont IBAN
- TVA (VAT), cotă TVA (VAT rate), bază impozabilă (taxable base), scutit de TVA (VAT-exempt), taxare inversă (reverse charge)
- societate, PFA, SRL, SA; sediu social (registered office)
- Validate CUI (with/without `RO` prefix) and IBAN. **Both have checksums and
  both must be verified** — CUI uses the mod-11 control digit, IBAN uses
  mod-97. Format-only validation is not validation.

## Content Rules
- Address users with appropriate RO register (consistent formal "dumneavoastră" vs informal "tu" per product voice)
- Legal/fiscal labels must match official ANAF wording on documents and exports
- Keep RO and EN tone aligned; UX copy stays concise in both (see ux-writer skill)
