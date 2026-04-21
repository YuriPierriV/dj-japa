# Hero Bento Overlay Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Hero section into a Dark Bento Overlay layout that visually connects with the About section to improve storytelling and conversion.

**Architecture:** Convert the full-bleed hero image to a massive rounded card within a dark section, and apply a negative top margin to the subsequent About section to overlap and intersect the hero.

**Tech Stack:** Next.js (App Router), React, Tailwind CSS

---

### Task 1: Refactor HeroSection to Bento Card

**Files:**
- Modify: `src/components/HeroSection.tsx`

- [ ] **Step 1: Replace outer section wrapper and add inner bento card**
Replace the root `<section>` and add the new inner container:

```tsx
    <section className="relative w-full bg-zinc-950 pt-4 sm:pt-6 pb-20 sm:pb-32">
      {/* Inner Bento Card */}
      <div className="relative w-[96%] max-w-[1600px] mx-auto min-h-[85vh] sm:min-h-[90vh] rounded-[2rem] sm:rounded-[3rem] overflow-hidden flex items-center justify-center border border-white/5 shadow-2xl">
      {/* Background Image starting here ... */}
```
(Replace `<section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-wedding-dark">`)

- [ ] **Step 2: Close the inner bento card**
Before the final `</section>` at the bottom of the file, add the closing `</div>` for the inner card.

```tsx
      </div> {/* End of Inner Bento Card */}
    </section>
  );
```

### Task 2: Refactor AboutSection to overlap Hero

**Files:**
- Modify: `src/components/AboutSection.tsx`

- [ ] **Step 1: Add negative margin and z-index to AboutSection**
Modify the root `<section>` of AboutSection to intersect exactly over the padding we left on the hero.

```tsx
<section id="sobre" className="section-padding bg-wedding-sand relative overflow-hidden -mt-16 sm:-mt-24 z-20">
```
(Replace `<section id="sobre" className="section-padding bg-wedding-sand relative overflow-hidden">`)

### Task 3: Visual Verification

- [ ] **Step 1: Verify in Browser**
Take a screenshot of `http://localhost:3000` using the browser subagent or manually check.
**Expected:** The Hero image should look like a floating glass/rounded card on a dark background. The `AboutSection` beige background should overlap the dark section cleanly, pulling the storytelling layout together.
