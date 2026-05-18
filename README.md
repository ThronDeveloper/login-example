# LoginExample

A modern, responsive login page built with Next.js, featuring OAuth provider integration and dark/light theme support.

## Features

- **OAuth Providers**: Yandex, Google, Apple, Meta
- **Dark/Light Mode**: Seamless theme switching with smooth transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Custom Fonts**: Manrope for body text, BMono Semibold for branding
- **Accessible**: Keyboard navigation and screen reader support

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management
- TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
login-example/
├── app/
│   ├── globals.css      # Global styles & theme variables
│   ├── layout.tsx       # Root layout with theme provider
│   └── page.tsx         # Login page component
├── public/
│   ├── font/            # BMono font files
│   ├── social-logos/    # OAuth provider icons
│   ├── svetra/          # Brand assets
│   └── favicon.svg      # Site favicon
└── tailwind.config.ts   # Tailwind configuration
```

## Customization

### OAuth Integration

Replace `href="#"` in `app/page.tsx` with your OAuth authorization URLs:

```tsx
<a href="https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&...">
```

### Theme Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --surface: #f9f9f9;
  --background: #f9f9f9;
}

.dark {
  --surface: #030303;
  --background: #030303;
}
```

## License

MIT
