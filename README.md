# Sajghor Handmade Jewellery

A polished React + Vite website for Sajghor, a handmade jewellery brand.

The site showcases handcrafted jewellery products, category filtering, YouTube videos, and social contact calls-to-action for WhatsApp, Instagram, Facebook, and YouTube.

## Features

- Home hero section with brand messaging
- Products loaded from Google Sheets via `src/services/sheetApi.js`
- Dynamic category filtering
- Video gallery loaded from Google Sheets via `src/services/videoApi.js`
- Contact section with WhatsApp CTA and social links
- Responsive layout with Tailwind CSS
- Icons from `lucide-react` and `react-icons`

## Project Structure

- `src/App.jsx` — main page sections
- `src/components/` — page components like `Navbar`, `Hero`, `Products`, `VideoSection`, `Contact`, `Footer`
- `src/services/sheetApi.js` — fetch products from Google Sheets
- `src/services/videoApi.js` — fetch videos from Google Sheets
- `src/assets/` — site images and media

## Environment Variables

This project uses Vite environment variables for the Google Sheets API URL.

Create a `.env` file in the project root with:

```env
VITE_SHEET_API_URL=https://script.google.com/macros/s/.../exec
```

The app reads this value in `src/services/sheetApi.js` and `src/services/videoApi.js`.

## Setup

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Lint the project:

```bash
npm run lint
```

## Notes

- `.env` is ignored by Git in `.gitignore`
- Update the WhatsApp number and social URLs in `src/components/Hero.jsx`, `src/components/Contact.jsx`, and `src/components/Footer.jsx`

## License

This repository is for the Sajghor handmade jewellery website project.
