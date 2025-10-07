# 3D Calculator Design Guidelines

## Design Approach
**Selected Approach:** Custom 3D Interface Design inspired by modern skeuomorphic and neumorphic design principles, taking cues from iOS calculator's clarity combined with tactile 3D depth effects similar to physical calculators and modern design tools like Figma's interface depth treatment.

**Core Design Principle:** Create a physically tangible digital calculator that feels like a premium device through sophisticated use of depth, shadows, and 3D transforms while maintaining mathematical precision and clarity.

## Color Palette

### Dark Mode (Primary)
- **Calculator Body:** 220 15% 15% (deep slate with slight blue tint)
- **Display Screen:** 220 20% 10% (darker recessed area)
- **Display Text:** 0 0% 98% (crisp white for numbers)
- **Number Buttons:** 220 12% 25% (medium gray with depth)
- **Operation Buttons:** 210 90% 55% (vibrant blue for operators)
- **Equals Button:** 150 70% 45% (green for calculation)
- **Clear Button:** 0 70% 55% (red for reset)
- **Button Shadows:** Multiple layered shadows for depth

### Light Mode (Alternative)
- **Calculator Body:** 0 0% 95% (soft white)
- **Display Screen:** 0 0% 88% (subtle recess)
- **Number Buttons:** 0 0% 98% (bright white with shadows)
- **Operations:** 210 95% 50% (saturated blue)

## Typography
- **Display Font:** 'Orbitron' or 'Roboto Mono' (digital/technical feel)
- **Display Size:** 3xl to 4xl (48-56px) for primary numbers
- **Button Labels:** 'Inter' or 'SF Pro Display' 
- **Button Size:** xl (20px) for numbers, lg (18px) for operations
- **Weight:** Display: 600-700 (semibold), Buttons: 500-600 (medium)

## Layout System
**Primary Spacing Units:** 4, 6, 8, 12, 16 (Tailwind scale)

**Calculator Dimensions:**
- Container: max-w-md (448px) with mx-auto centering
- Internal padding: p-8 for breathing room
- Button grid: 4-column layout with gap-4
- Display area: mb-6 separation from buttons

**Viewport Strategy:**
- Center calculator vertically and horizontally (min-h-screen flex items-center justify-center)
- Fixed aspect ratio calculator that adapts responsively
- Mobile: Full viewport optimization with touch-friendly buttons

## 3D Visual Treatment

### Depth System
**Primary 3D Effects:**
- Calculator chassis: translate-z and rotateX for floating effect
- Button depth: 4-6px physical depth using transform and shadows
- Display recess: Inset appearance with inner shadows
- Perspective container: 1000px perspective on wrapper

**Shadow Layering (Critical for 3D):**
```
Button Normal State:
- Primary shadow: 0 4px 8px rgba(0,0,0,0.3)
- Highlight: inset 0 1px 0 rgba(255,255,255,0.1)
- Depth shadow: 0 8px 16px rgba(0,0,0,0.2)

Button Pressed State:
- Reduced shadow: 0 1px 2px rgba(0,0,0,0.2)
- Transform: translateY(2px) scale(0.98)
- Inner shadow: inset 0 2px 4px rgba(0,0,0,0.2)
```

### Material Properties
- Button surfaces: Subtle gradients for dimensional feel (linear-gradient from lighter top to darker bottom)
- Glass morphism on display: backdrop-blur-sm with semi-transparent background
- Metallic accents: Subtle shine effects on operation buttons
- Rounded corners: rounded-2xl for calculator body, rounded-xl for buttons

## Component Library

### Display Screen
- Recessed frame with dark background
- Text alignment: right-aligned for calculator convention
- History display: Smaller text above main result (text-sm opacity-60)
- Overflow: text-overflow-ellipsis for long calculations
- Border: Thin inset border for depth perception

### Button Grid
**Number Buttons (0-9):**
- Base color with subtle gradient
- Circular or rounded-xl shape
- Hover: lift effect (translateY(-2px))
- Active: press down animation
- Size: Equal width/height, touch-friendly (min 60px)

**Operation Buttons (+, -, ×, ÷):**
- Distinct blue color for visual hierarchy
- Same interaction patterns as numbers
- Slightly bolder typography

**Special Buttons:**
- Clear (C/AC): Red accent, positioned top-left
- Equals (=): Green accent, spans 2 columns at bottom
- Decimal point: Same as numbers
- Percentage/+/-: Utility gray

**Button States:**
- Default: 3D raised appearance
- Hover: Subtle lift and glow
- Active: Press down with scale reduction
- Focus: Blue ring for keyboard navigation

## Interactive Animations
- Button press: 120ms ease-out transform
- Result calculation: Subtle flash or scale pulse on equals press
- Error state: Red flash on display for invalid operations
- Clear action: Smooth fade-out of numbers
- Transition properties: transform, box-shadow, background-color

## Keyboard Support
- Number keys: 0-9 input
- Operation keys: +, -, *, / 
- Enter/= for calculation
- Escape/C for clear
- Backspace for delete
- Visual feedback: Highlight corresponding button on keypress

## Accessibility Considerations
- ARIA labels for all buttons
- High contrast ratios (4.5:1 minimum)
- Focus indicators visible in both modes
- Screen reader announcements for calculations
- Reduced motion preference: Disable 3D transforms, keep functional animations

## Responsive Behavior
**Mobile (< 640px):**
- Larger touch targets (min 64px)
- Increased button spacing (gap-5)
- Simplified shadows for performance

**Tablet/Desktop (≥ 640px):**
- Full 3D effect suite
- Hover interactions enabled
- Subtle parallax on calculator rotation

**No images required** - This is a pure UI tool focused on 3D visual effects and interaction design.