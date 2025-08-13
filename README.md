# Congzhou Machinery - A UniPack Company

A professional acquisition announcement website built with Next.js, showcasing the strategic acquisition of Congzhou Packaging Machinery Mfg. Co. by UniPack Corrugated.

## 🚀 Features

- **Responsive Design**: Pixel-perfect across desktop (1440px+), tablet (768px), and mobile (384px)
- **Professional Animations**: Subtle Framer Motion animations for enhanced user experience
- **Auto-redirect**: 15-second countdown timer with automatic redirect to UniPack website
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, and structured data
- **Performance**: Next.js 15 with Tailwind CSS for optimal loading speeds
- **Accessibility**: WCAG compliant with proper focus states and screen reader support

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom design system
- **Typography**: Geist font family
- **Animations**: Framer Motion
- **Package Manager**: Bun
- **Deployment**: Optimized for Vercel/Cloudflare Pages

## 📱 Responsive Breakpoints

- **Mobile**: 384px and below (optimized font scaling)
- **Tablet**: 672px (md: breakpoint)
- **Desktop**: 768px and above (full design)

## 🎨 Design System

- **Primary Color**: #f00027 (UniPack Red)
- **Typography**: Geist Sans with precise tracking
- **Color Palette**: Stone variants (50-900)
- **Logo Integration**: CM and UniPack brand assets

## 🔧 Development

### Prerequisites
- Node.js 18+
- Bun package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd cm-coming-soon

# Install dependencies
bun install

# Start development server
bun dev
```

### Build for Production
```bash
# Create optimized production build
bun run build

# Start production server
bun start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main acquisition announcement page
│   ├── not-found.tsx       # Custom 404 page with auto-redirect
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   └── ui/                 # UI component library (if needed)
public/
├── FAVICON.png             # Brand favicon
├── OG IMAGE.png            # Social media preview image
├── robots.txt              # Search engine directives
├── sitemap.xml             # Site structure for SEO
└── [assets]                # Design assets and images
```

## 🌐 SEO & Metadata

- **Title**: "Congzhou Machinery - A UniPack Company"
- **Description**: Professional acquisition announcement optimized for search
- **Open Graph**: Custom OG image with brand assets
- **Canonical URL**: https://www.congzhoumachinery.com
- **Structured Data**: Organization and acquisition event markup

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Set domain to `www.congzhoumachinery.com`
3. Deploy automatically on push to main branch

### Cloudflare Pages
1. Connect repository to Cloudflare Pages
2. Build command: `bun run build`
3. Output directory: `.next`

## 🔗 Key URLs

- **Main Site**: https://www.congzhoumachinery.com
- **Article**: https://www.unipack.asia/hello/unipack-corrugated-launches-india-operations-through-strategic-acquisition-of-congzhou-machinery
- **Redirect Target**: https://www.unipack.asia

## 📊 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Font Loading**: Optimized Geist font loading strategy
- **Bundle Splitting**: Automatic code splitting
- **SEO**: Complete search engine optimization
- **Caching**: Optimized caching headers

## 🎯 User Flow

1. User lands on acquisition announcement page
2. Professional layout displays key information
3. "Read the Article" button links to full press release
4. 15-second countdown automatically redirects to UniPack website
5. 404 pages redirect back to home page

## 📱 Accessibility

- Proper heading hierarchy (H1, H2, etc.)
- Focus-visible states on interactive elements
- Screen reader friendly content structure
- Color contrast compliance
- Keyboard navigation support

## 🔧 Configuration

### Environment Variables
No environment variables required for basic functionality.

### Customization
- Update countdown timer in `src/app/page.tsx`
- Modify redirect URLs as needed
- Customize brand colors in Tailwind config
- Update metadata in `src/app/layout.tsx`

## 📈 Analytics & Monitoring

Ready for integration with:
- Google Analytics 4
- Google Search Console
- Vercel Analytics
- Web Vitals monitoring

## 🤝 Contributing

This is a specific acquisition announcement site. For updates:
1. Create feature branch
2. Make changes with proper testing
3. Submit pull request with clear description
4. Deploy after approval

## 📄 License

Proprietary - UniPack Corrugated & Congzhou Machinery

## 📞 Support

For technical support or updates, contact the development team.

---

**Built with ❤️ for UniPack Corrugated & Congzhou Machinery**
