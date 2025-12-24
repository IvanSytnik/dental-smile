# Dental Smile Germany - Landing Page

Premium multilingual dental clinic landing page built with React + Vite.

## 🌐 Languages
- 🇩🇪 German (Deutsch)
- 🇬🇧 English
- 🇷🇺 Russian (Русский)
- 🇺🇦 Ukrainian (Українська)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
dental-smile/
├── public/
├── src/
│   ├── components/         # React components
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── TrustBar/
│   │   ├── About/
│   │   ├── Services/
│   │   ├── Pricing/
│   │   ├── Team/
│   │   ├── Package/
│   │   ├── Process/
│   │   ├── Gallery/
│   │   ├── CTA/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── context/            # React Context
│   │   └── LanguageContext.jsx
│   ├── data/               # Data files
│   │   ├── translations.js
│   │   └── pricing.js
│   ├── styles/             # Global styles
│   │   ├── variables.css
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ✨ Features

- **Multilingual Support** - 4 languages with context-based switching
- **Responsive Design** - Mobile-first approach
- **Modern UI** - Clean, professional dental clinic design
- **Price Comparison** - German vs. clinic prices with savings
- **Working Contact Form** - Ready for backend integration
- **SEO Friendly** - Semantic HTML structure
- **Fast** - Vite-powered development and builds

## 🎨 Design System

### Colors
- Primary: `#0A5F5F` (Teal)
- Secondary: `#C9A227` (Gold)
- Dark: `#1A1A1A`
- Cream: `#FAF8F5`

### Fonts
- Display: Playfair Display
- Body: DM Sans

## 📞 Sections

1. **Header** - Navigation with language switcher
2. **Hero** - Main banner with CTA
3. **Trust Bar** - Certifications and trust signals
4. **About** - Clinic introduction
5. **Services** - Service cards with prices
6. **Pricing** - Full price comparison table
7. **Team** - Doctor and coordinator profiles
8. **Package** - All-inclusive package details
9. **Process** - 4-step treatment process
10. **Gallery** - Clinic photos
11. **CTA** - Call to action banner
12. **Contact** - Contact form and info
13. **Footer** - Links and copyright

## 🔧 Customization

### Adding New Languages
1. Add translations to `src/data/translations.js`
2. Add language option to `Header.jsx`

### Updating Prices
Edit `src/data/pricing.js`

### Changing Colors
Edit `src/styles/variables.css`

## 📄 License

MIT License - Feel free to use for your dental clinic!
