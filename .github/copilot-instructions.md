# Claude Code Context

This file provides context for Anthropic Claude Code.

---
## Project Guide Addition

# How to Add a New Project - Complete Guide

This guide walks you through adding a new project to the showcase system.

## 📂 Step 1: Prepare Project Assets (Auto-Processing)

### 🎯 Simple Image Setup
Follow the naming convention and drop images in the right folder!

```
📁 raw-images/[project-slug]/
├── 📸 01-desktop-homepage.png         # Main desktop view
├── 📱 02-mobile-login.jpg             # Mobile screenshot
├── ⭐ 03-feature-dashboard.png        # Feature demonstration
└── 🎯 04-tablet-settings.webp         # Tablet view
```

### 📝 Required Naming Convention
**Format**: `[number]-[category]-[description].[ext]`

**📋 Parts Explained**:
- **number**: Display order (01, 02, 03...) - controls screenshot sequence in showcase
- **category**: Device type (desktop, mobile, tablet, feature) - determines output dimensions
- **description**: What it shows (homepage, login, dashboard) - for human identification
- **ext**: File format (png, jpg) - input format you provide

**📐 Categories & Output Sizes**:
- `desktop` → 1200×800px (main views, homepage, dashboard)
- `mobile` → 375×667px (mobile app screenshots)
- `tablet` → 768×1024px (tablet/iPad views) 
- `feature` → 800×600px (feature demos, components)

**Examples**:
```
✅ Perfect:
01-desktop-homepage.png          (1st screenshot, desktop size, homepage)
02-mobile-user-profile.jpg       (2nd screenshot, mobile size, profile screen)
03-feature-search-filters.png    (3rd screenshot, feature size, search demo)
04-tablet-dashboard.png          (4th screenshot, tablet size, dashboard)
```

---
#### Calculator App Portfolio Integration (Contextual Guide)

For the Simple Calculator app, prepare screenshots in `raw-images/simple-calculator/` using the format `[number]-[category]-[description].[ext]`.

Recommended images:
- `01-desktop-homepage.png` (main calculator view on desktop)
- `02-mobile-calculator.jpg` (calculator on mobile)
- `03-feature-error-message.png` (error handling example)
- `04-tablet-keypad.webp` (tablet layout)

Categories and sizes:
- `desktop`: 1200×800px (main UI)
- `mobile`: 375×667px (mobile view)
- `tablet`: 768×1024px (tablet view)
- `feature`: 800×600px (unique features)

Number images for showcase order and use descriptive names. Ensure screenshots, description, and GitHub link are ready for portfolio submission at `https://www.jdilig.me/projects`.

## Project Overview

This is a Next.js application using TypeScript, Tailwind CSS, and the App Router. The app is intended for calculator-related functionality.

---
## Grok Project Plan Addition

**Simple Calculator (Next.js/TypeScript/Tailwind)**

**Product Overview**: A web-based calculator app for basic arithmetic operations (addition, subtraction, multiplication, division).

**Target Audience**: Portfolio visitors at `https://www.jdilig.me/projects` to showcase modern web dev skills.

**Key Features**:
- **UI**: Numeric keypad (0-9), operators (+, -, *, /), clear button, equals button, and result display.
- **Functionality**: 
	- Input numbers and operators via button clicks.
	- Display current input and results in real-time.
	- Handle basic arithmetic calculations.
	- Clear display to reset.
- **Error Handling**: Prevent invalid inputs (e.g., multiple decimals, division by zero) with user-friendly error messages (e.g., "Error").
- **Responsive Design**: Usable on desktop and mobile with consistent layout.

**Tech Requirements**:
- **Next.js**: Use for component-based structure and potential static generation.
- **TypeScript**: Enforce type safety for state and event handlers.
- **Tailwind CSS**: Apply utility-first styling for rapid, responsive design (grid for buttons, flex for layout).

**User Stories**:
1. As a user, I want to input numbers and operators so I can perform calculations.
2. As a user, I want a clear button to reset the calculator.
3. As a user, I want to see results instantly after pressing equals.
4. As a user, I want error messages for invalid operations (e.g., division by zero).
5. As a user, I want the app to look good and work seamlessly on my phone or desktop.

**Design Guidelines**:
- Clean, minimal UI with readable fonts.
- Button grid layout (4x4 or similar) with hover effects.
- Display area for input/results (right-aligned text).
- Use Tailwind classes for styling (e.g., `bg-gray-200`, `hover:bg-gray-300`, `rounded`).
- Mobile-friendly with adaptive font sizes and spacing.

**Edge Cases**:
- Prevent multiple consecutive operators.
- Handle decimal points (only one per number).
- Display "Error" for invalid expressions or division by zero.

**Deliverables**:
- Single-page Next.js app with calculator component.
- Deployable to Vercel or similar for portfolio showcase.
- Include screenshot, description, and GitHub link on `https://www.jdilig.me/projects`.

**Estimated Effort**: 6-10 hours for development and testing.

**Portfolio Impact**: Highlights skills in Next.js, TypeScript, Tailwind, and responsive UI design.

## Guidelines
- Use idiomatic TypeScript and React.
- Follow Tailwind CSS conventions for styling.
- Organize code using the App Router structure.
- Write clear, maintainable, and well-documented code.

### Portfolio Project Guide (Contextual Summary)

For portfolio projects, prepare assets for auto-processing by following a clear image naming convention. Place screenshots in `raw-images/[project-slug]/` and name them using the format `[number]-[category]-[description].[ext]` (e.g., `01-desktop-homepage.png`).

Categories help determine output sizes:
- `desktop` (1200×800px): main views, homepage, dashboard
- `mobile` (375×667px): mobile app screens
- `tablet` (768×1024px): tablet/iPad views
- `feature` (800×600px): feature demos/components

Order screenshots by number for showcase sequencing. Use descriptive names for clarity. This ensures your project assets are processed and displayed correctly on your portfolio site.
