# Irefurb - Professional Device Repair Services

A modern, mobile-responsive landing page for Irefurb device repair shop specializing in mobile and tablet display repairs.

## Features

- **Modern Design**: Clean, tech-oriented aesthetic with professional color palette
- **Multi-Step Repair Request Form**: Interactive form with brand/model/issue selection
- **WhatsApp Integration**: Direct quote requests via WhatsApp with pre-filled messages
- **Responsive Design**: Fully mobile-optimized layout
- **Sticky Navigation**: Easy access to all sections
- **Service Showcase**: Detailed service offerings
- **Contact Information**: WhatsApp and physical location details

## Technology Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
irefurb/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Key Features

### Repair Request Form
- **Step 1**: Brand selection (Apple, Samsung, OnePlus, Google, Xiaomi, iPad)
- **Step 2**: Dynamic model selection based on brand
- **Step 3**: Issue selection (Cracked Screen, Touch Not Working, etc.)
- **WhatsApp Integration**: Automatic redirect with pre-filled message

### Design Elements
- **Color Scheme**: Deep slate grays with cyan accents
- **Typography**: Inter font family for modern readability
- **Glass Morphism**: Frosted glass effects for modern aesthetics
- **Micro-interactions**: Hover states and smooth transitions

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interface elements
- Optimized navigation for all devices

## WhatsApp Integration

The form automatically generates WhatsApp messages with the format:
```
Hi Irefurb, I need a repair quote for my [Brand] [Model] with a [Issue] issue.
```

This redirects to: `https://wa.me/918122334434`

## Customization

### Adding New Brands/Models
Update the `brandModels` object in `src/app/page.tsx`:

```typescript
const brandModels = {
  'NewBrand': ['Model 1', 'Model 2', 'Model 3'],
  // ... existing brands
}
```

### Updating Contact Information
Modify the WhatsApp number and address in the contact section of `src/app/page.tsx`.

### Color Scheme
Update the Tailwind config in `tailwind.config.js` to customize the color palette.

## Build and Deploy

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## License

© 2024 Irefurb. All rights reserved.
