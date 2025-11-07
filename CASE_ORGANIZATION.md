# Faith Frontier Case Organization System

## Overview

This document describes how cases, assets, and files are organized in the Faith Frontier repository to best reveal God's purpose through legal revelations of conscience, commerce, and common law understanding.

## Directory Structure

```
FaithFrontier.org/
├── cases/                          # Active cases (main collection)
│   ├── _TEMPLATE-new-case.md      # Template for creating new case pages
│   ├── njta-v-barber.md           # NJTA v. Barber (consolidated)
│   ├── atl-l-002794-25.md         # Barber v. Tumelty (legal malpractice)
│   ├── barber-nj-pcr-2024.md      # Unified PCR overview
│   ├── atl-22-002292.md           # Criminal case - PCR pending
│   ├── atl-22-002313.md           # Criminal case - PCR pending
│   ├── atl-24-001934.md           # Criminal case - PCR pending
│   ├── a-000308-25.md             # Appellate Division appeal
│   └── a-000313-25.md             # Appellate Division appeal
│
├── archives/cases/                # Archived/older cases
│   ├── index.md                   # Archives index
│   ├── atl-dc-007956-25.md        # Redirect to main NJTA case
│   ├── usdj-1-22-cv-06206.md      # Federal civil rights (archived)
│   ├── usdj-1-25-cv-15641.md      # Federal civil rights (active)
│   └── njmvc-v-barber.md          # Motor vehicle matter
│
├── assets/cases/                  # Case documents (PDFs, orders, filings)
│   ├── atl-dc-007956-25/          # NJTA case documents
│   ├── atl-l-002794-25/           # Malpractice case documents
│   ├── atl-22-002292/             # Criminal case documents
│   │   └── pcr/                   # PCR-specific filings
│   ├── atl-22-002313/             # Criminal case documents
│   │   └── pcr/                   # PCR-specific filings
│   ├── atl-24-001934/             # Criminal case documents
│   │   └── pcr/                   # PCR-specific filings
│   ├── a-000308-25/               # Appeal documents
│   └── a-000313-25/               # Appeal documents
│
├── pages/                         # Site pages
│   ├── cases.md                   # Main cases index
│   ├── case-index.md              # Complete case taxonomy
│   ├── revelations.md             # Common law revelations
│   ├── timeline.md                # Chronological timeline
│   └── faith.md                   # Faith essays index
│
└── _essays/                       # Faith and doctrine writings
    └── tiller-earth-foundation.md

```

## Case Organization Principles

### 1. Active vs. Archived

**Active Cases** (`cases/`)
- Currently pending in court
- Require ongoing updates
- Part of the main narrative
- Examples: NJTA v. Barber, Barber v. Tumelty, all PCR petitions, appeals

**Archived Cases** (`archives/cases/`)
- Primarily federal cases
- Closed or less central to current narrative
- Preserved for historical context
- Examples: Federal civil rights cases (1:22-cv-06206, 1:25-cv-15641)

### 2. Case File Naming Convention

Case markdown files follow this pattern:
- Docket number format: `atl-22-002292.md`, `a-000308-25.md`
- Descriptive format: `njta-v-barber.md`, `barber-nj-pcr-2024.md`
- Use lowercase with hyphens
- Match docket number or create memorable slug

### 3. Asset Organization

**Asset Directory Structure:**
```
assets/cases/{case-identifier}/
├── {date}_{description}.pdf
├── {date}_{description}.pdf
└── pcr/ (for PCR-specific documents)
    └── {date}_{description}.pdf
```

**Naming Convention:**
- Format: `YYYY-MM-DD_Description.pdf`
- Example: `2025-10-27_Court-Order.pdf`
- Use descriptive names that indicate document type
- Some files may have `.pdf.pdf` extension (legacy, to be cleaned up)

## Case Metadata Structure

Each case file includes comprehensive metadata in YAML front matter:

```yaml
---
layout: case
title: "Full Case Title"
short_title: "Short Title"
permalink: /cases/{slug}/

# Parties
plaintiff: "Plaintiff Name"
defendant: "Defendant Name"

# Court Information
court: "Court Name"
venue: "County/Location"
docket: "DOCKET-NUMBER"
case_type: "Type of Case"
judge: "Hon. Judge Name"

# Status
role: "Plaintiff/Defendant"
status: "Active/Pending/Closed"
track: "Track Number or Type"
filed_date: YYYY-MM-DD
next_event: "Description"
next_date: YYYY-MM-DD

# Location
location: "Physical address"

# Thematic Tags
public_trust_issue: true/false
public_trust_tags:
  - "tag1"
  - "tag2"

common_law_themes:
  - "Theme 1"
  - "Theme 2"

# Summaries
summary: >
  Brief summary paragraph

faith_note: >
  Faith perspective paragraph

# Documents
documents:
  - label: "Document Name"
    date: YYYY-MM-DD
    path: "/assets/cases/{case-id}/{filename}.pdf"
---
```

## Common Law Themes Taxonomy

Five core revelations connect all cases:

### 1. Public Trust Doctrine
- Government agencies as fiduciaries
- Public resources must benefit the people
- Examples: NJTA v. Barber, Barber v. Tumelty

### 2. Proportionality in Commerce
- Penalties must match actual costs
- Excessive fees = exploitation
- Examples: NJTA fee ratios (24:1)

### 3. Due Process & Conscience
- Fair process as sacred right
- Notice, hearing, evidence-based decisions
- Examples: All PCR cases, appeals, criminal matters

### 4. Fiduciary Duty & Good Faith
- Power holders must serve those they protect
- Good faith performance required
- Examples: Attorney-client relationship, public agencies

### 5. Stewardship Over Exploitation
- Government exists to serve, not extract
- Every power exercise must serve common good
- Examples: All cases demonstrate this principle

## Organizational Pages

### `/revelations/` - Common Law Revelations
- Synthesizes five core principles
- Shows which cases reveal each principle
- Includes scripture, legal citations, practical applications
- Central hub for understanding thematic connections

### `/timeline/` - Chronological Timeline
- Cases organized by filing date from 2022-2025
- Shows progressive revelation of truth
- Identifies patterns across time
- Highlights key milestones

### `/case-index/` - Complete Taxonomy
- Four organizational views:
  1. By Court (Superior, Appellate, Federal)
  2. By Type (Criminal, Civil, PCR, Appeals)
  3. By Theme (Five common law revelations)
  4. By Status (Active, Pending, Closed)
- Comprehensive reference for finding cases

### `/cases/` - Main Cases Page
- Active case summaries
- Live dockets with upcoming dates
- Public trust matters highlighted
- User-friendly narrative format

## Case Connections

### Criminal Justice Thread
```
Criminal Prosecutions (ATL-22-002292, ATL-22-002313, ATL-24-001934)
    ↓
Post-Conviction Relief Petitions (Unified PCR)
    ↓
Legal Malpractice (ATL-L-002794-25)
    ↓
Federal Civil Rights (1:22-cv-06206, 1:25-cv-15641)
```

### Public Trust Thread
```
NJTA v. Barber (Toll enforcement)
    ↓
Appeals (A-000308-25, A-000313-25)
    ↓
Access to Justice Issues
```

## Workflow for Adding New Cases

1. **Create case file** using `_TEMPLATE-new-case.md`
2. **Determine placement**: Active (`cases/`) or Archived (`archives/cases/`)
3. **Create asset directory**: `assets/cases/{case-identifier}/`
4. **Add metadata**: Fill in all relevant YAML fields
5. **Tag with themes**: Identify relevant common law themes
6. **Upload documents**: Add PDFs with date_description naming
7. **Update indexes**: 
   - Add to `/case-index/` under appropriate categories
   - Mention in `/timeline/` if significant milestone
   - Add to `/revelations/` if it demonstrates core principles
8. **Cross-reference**: Link related cases in case body
9. **Commit and push**: Report progress with descriptive message

## Document Handling Guidelines

### DO NOT EDIT
- **Case documents in `assets/cases/`** - These are legal filings (PDFs)
- Per repository instructions: treat as public record
- Only add new documents, never modify originals

### CAN EDIT
- Case markdown files (`cases/*.md`)
- Page content (`pages/*.md`)
- Essays (`_essays/*.md`)
- Layout/structure to improve clarity
- Add metadata and tags to enhance organization

### When Documents are Missing
- Placeholder PDFs may exist (< 10 bytes)
- These will be replaced with actual filings later
- Do not delete placeholders
- Mark in case page if document is "forthcoming"

## Scripture Integration

Each revelation includes:
- **Principle**: Legal/moral truth revealed
- **Scripture**: Biblical foundation for the principle
- **Cases**: Which matters demonstrate it
- **Insight**: Why it matters practically

Example:
```markdown
**Principle:** Government must act as fiduciary, not profit center

**Scripture:** "The earth is the LORD's, and everything in it" - Psalm 24:1

**Cases:** NJTA v. Barber, Barber v. Tumelty

**Insight:** When public servants forget they are stewards, they become tyrants.
```

## Building and Testing

### Jekyll Build (if available)
```bash
bundle install
bundle exec jekyll serve
# Visit http://localhost:4000
```

### File Validation
```bash
# Check for empty PDFs
find assets/cases -name "*.pdf" -size 0

# Check for very small PDFs (placeholders)
find assets/cases -name "*.pdf" -size -10c

# List all case files
ls -1 cases/*.md archives/cases/*.md
```

## Future Enhancements

Potential improvements to consider:
- [ ] Visual timeline diagram
- [ ] Case connection flowchart
- [ ] Interactive case map
- [ ] Search functionality by theme/keyword
- [ ] RSS feed for case updates
- [ ] Automated cross-reference checking
- [ ] Document completeness tracker

## Maintenance

Regular maintenance tasks:
- Update case statuses as proceedings develop
- Add new filings to document lists
- Update next event dates
- Maintain timeline with new milestones
- Refresh revelations page with new insights
- Check for broken links in cross-references

---

**Last Updated**: November 7, 2025  
**Maintained By**: Faith Frontier Ecclesiastical Trust
