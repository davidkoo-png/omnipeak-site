# Omnipeak Website

A modern, professional multi-page website for Omnipeak Technology Consulting.

## 🚀 Quick Start

### Deploying to GitHub Pages

1. **Create a GitHub repository**
   - Go to github.com and create a new repository
   - Name it `omnipeak` or `your-username.github.io` for a user site

2. **Push this code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Omnipeak website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select the `main` branch and `/ (root)` folder
   - Click Save
   - Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`

### Setting Up the Contact Form

The contact form uses [Formspree](https://formspree.io) to handle submissions without a backend.

1. Create a free account at https://formspree.io
2. Create a new form to get your form ID
3. Open `contact.html` and replace `YOUR_FORMSPREE_ID` with your actual ID:
   ```html
   action="https://formspree.io/f/YOUR_ACTUAL_ID"
   ```

## 📁 Project Structure

```
/
├── index.html          # Home page
├── services.html       # Services detail page
├── about.html          # About/founder page
├── process.html        # Four-step process page
├── contact.html        # Contact form page
├── css/
│   └── styles.css      # All styles (single file)
├── js/
│   └── main.js         # Mobile menu, scroll effects
├── images/             # Place images here
│   └── .gitkeep
└── README.md           # This file
```

## 🎨 Customization Guide

### Changing Colors

Edit the CSS custom properties in `css/styles.css`:

```css
:root {
  --color-charcoal: #36454F;      /* Primary dark */
  --color-teal: #008080;          /* Accent color */
  --color-white: #FFFFFF;         /* Backgrounds */
  /* ... other color variables */
}
```

### Changing Fonts

The site uses Plus Jakarta Sans from Google Fonts. To change:

1. Choose a font from [Google Fonts](https://fonts.google.com)
2. Update the `<link>` tag in each HTML file's `<head>`
3. Update `--font-primary` in `css/styles.css`

### Adding Images

1. Place images in the `/images/` folder
2. Reference them in HTML: `<img src="images/your-image.jpg" alt="Description">`
3. For the founder photo, update the avatar in `about.html`

### Updating Content

- **Business info**: Edit text directly in HTML files
- **Email address**: Search and replace `hello@omnipeak.com`
- **Services**: Modify `services.html` content
- **Process steps**: Edit `process.html`

## 📱 Responsive Design

The site is fully responsive:
- **Desktop**: Full layout with sidebar
- **Tablet**: Adjusted grid layouts
- **Mobile**: Stacked layouts, hamburger menu

Breakpoints:
- 1024px: Tablet
- 768px: Mobile
- 480px: Small mobile

## 🔧 Technical Notes

### Browser Support
- Chrome, Firefox, Safari, Edge (modern versions)
- CSS Grid and Flexbox used for layouts
- No JavaScript frameworks required

### Performance
- Single CSS file (~20KB)
- Minimal JavaScript (~3KB)
- No external dependencies except Google Fonts
- Fast loading on GitHub Pages

### Accessibility
- Semantic HTML5 structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast meets WCAG guidelines

## 📄 License

This website template is provided for use by Omnipeak Technology Consulting.

---

Built with care. Questions? [Contact Omnipeak](mailto:hello@omnipeak.com)
