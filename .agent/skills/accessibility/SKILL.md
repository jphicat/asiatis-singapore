---
name: accessibility
description: WCAG 2.1 AA compliance and accessibility best practices. Use when building UI components, forms, navigation, or running accessibility audits. Triggers on any a11y, accessibility, WCAG, or screen reader mention.
---

# Accessibility Skill — WCAG 2.1 AA Compliance

## Semantic HTML
- Use proper heading hierarchy (h1 > h2 > h3, never skip levels)
- One h1 per page
- Use <nav>, <main>, <header>, <footer>, <section>, <article> appropriately
- Use <button> for actions, <a> for navigation — never the reverse

## Keyboard Navigation
- All interactive elements must be focusable and operable via keyboard
- Visible focus indicators on all focusable elements (never outline: none without replacement)
- Logical tab order following visual layout
- Skip navigation link as first focusable element: <a href="#main-content" class="sr-only focus:not-sr-only">Skip to content</a>
- Escape key closes modals/dropdowns

## ARIA
- Prefer semantic HTML over ARIA (a <button> is better than <div role="button">)
- aria-label for icon-only buttons and links
- aria-expanded for toggleable elements (hamburger menu, dropdowns)
- aria-current="page" for active navigation items
- aria-hidden="true" for decorative elements
- role="img" + aria-label for SVG icons

## Color & Contrast
- Minimum contrast ratio: 4.5:1 for normal text, 3:1 for large text (18px+ bold or 24px+)
- Never convey information by color alone — add icons, text, or patterns
- Test with grayscale filter

## Images & Media
- All <img> must have descriptive alt text (empty alt="" for decorative images)
- Video: captions and transcripts
- Avoid autoplay; if used, provide pause control

## Forms
- Every input must have an associated <label> (use htmlFor/id pairing)
- Error messages linked via aria-describedby
- Required fields marked with aria-required="true" and visual indicator
- Group related fields with <fieldset> and <legend>

## Language
- Set lang attribute on <html> tag (lang="en" or lang="zh")
- Use lang attribute on inline content in different languages

## Motion
- Respect prefers-reduced-motion media query
- @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }

## Testing Checklist
- Tab through entire page — all elements reachable?
- Screen reader test (VoiceOver/NVDA)
- Lighthouse accessibility score > 95
- axe-core browser extension — 0 violations
- Zoom to 200% — layout still usable?
