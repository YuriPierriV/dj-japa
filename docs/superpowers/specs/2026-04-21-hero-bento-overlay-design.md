# Hero Redesign: Dark Bento Overlay

## Objective
Convert the current full-bleed Hero section into a "Dark Bento Overlay" structure. This creates a storytelling flow by having the `AboutSection` overlap the Hero, breaking the invisible barrier between sections and guiding the user naturally down to the contact form.

## Architecture & Components

### 1. `HeroSection.tsx`
- **Current:** Full-width, full-height (`min-h-[100vh]`) absolute background image with text on top.
- **New Approach:** 
  - The section background becomes a solid dark color (e.g., `bg-zinc-950` or the darkest theme token).
  - Inside, we place a massive rounded "bento card" container that does not touch the viewport edges perfectly (`w-[96%] mx-auto rounded-[2.5rem] overflow-hidden relative min-h-[85vh] mt-4`).
  - The background image, video overlay, and gradients move inside this rounded card.
  - The content (Logo, Title, Phrases, CTA) is centered inside this card. Add significant bottom padding to allow for the next section to intersect without hiding the CTA.

### 2. `AboutSection.tsx` (The Overlap)
- **Current:** Standard section with normal padding, solid background.
- **New Approach:**
  - Apply a negative top margin (e.g., `-mt-24` or `-mt-32`) and `relative z-20` to pull the About section *over* the bottom edge of the Hero's rounded card.
  - Modify the background or top layout so it feels like it's intersecting. The images in the left column will act as the first visual elements breaking the barrier, creating a continuous scroll path.

### 3. Typography & Storytelling Flow
- Keep the premium typography (`font-serif`, gold accents).
- The overlapping UI creates a Z-axis depth effect, highly characteristic of modern high-end editorial web design.
