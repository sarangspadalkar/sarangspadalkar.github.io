# Sarang Padalkar - Portfolio Website

A professional, responsive multi-page portfolio website for a Senior Backend Developer showcasing expertise in scalable system design, APIs, DevOps, and cloud architecture.

## 🚀 Features

- **Multi-page Portfolio**: Home, About, Projects, Resume, and Contact pages
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Dark Mode Toggle**: Persistent dark/light theme switching
- **Modern Animations**: Smooth transitions and micro-interactions with Framer Motion
- **Project Filtering**: Filter projects by technology stack
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Performance Optimized**: Fast loading with modern React practices

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: TailwindCSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Netlify/Vercel

## 📋 Pages

### Home

- Hero section with compelling headline
- Feature highlights showcasing backend expertise
- Call-to-action sections

### About

- Professional bio and journey
- Comprehensive tech stack breakdown
- Key strengths and specializations
- Experience summary with metrics

### Projects

- Showcase of 6 major backend projects
- Technology tags for each project
- GitHub and demo links
- Filter by technology or project type

### Resume

- Professional experience timeline
- Education and certifications
- Technical skills organized by category
- Downloadable PDF option

### Contact

- Contact form with validation
- Contact information and social links
- FAQ section
- Availability status

## 🎨 Design Features

- **Clean & Modern**: Professional design focused on readability
- **Consistent Branding**: Cohesive color scheme and typography
- **Accessible**: WCAG compliant with proper contrast ratios
- **Interactive Elements**: Hover effects and smooth transitions
- **Mobile Optimized**: Touch-friendly interface on all devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sarangspadalkar/sarangspadalkar.github.io.git
cd sarangspadalkar.github.io
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Add to `package.json`:

```json
{
    "homepage": "https://sarangspadalkar.github.io",
    "scripts": {
        "deploy": "gh-pages -d dist",
        "predeploy": "npm run build"
    }
}
```

2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.tsx          # Navigation component with dark mode toggle
├── pages/
│   ├── Home.tsx            # Landing page
│   ├── About.tsx           # About page with bio and skills
│   ├── Projects.tsx        # Project showcase with filtering
│   ├── Resume.tsx          # Professional experience and skills
│   └── Contact.tsx         # Contact form and information
├── App.tsx                 # Main app component with routing
├── main.tsx               # Entry point
└── index.css              # TailwindCSS imports and custom styles
```

## 🎯 Customization

### Content Updates

- **Personal Information**: Update contact details in `Contact.tsx`
- **Projects**: Modify project data in `Projects.tsx`
- **Experience**: Update work history in `Resume.tsx`
- **Skills**: Adjust tech stack in `About.tsx`

### Styling

- **Colors**: Modify primary colors in `tailwind.config.js`
- **Typography**: Update font settings in Tailwind config
- **Animations**: Adjust animation settings in `index.css`

### SEO

- **Meta Tags**: Update metadata in `index.html`
- **Open Graph**: Modify social media preview settings
- **Structured Data**: Add JSON-LD for better search results

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: jobs.padalkar.sarang@gmail.com
- **LinkedIn**: [Sarang Padalkar](https://www.linkedin.com/in/sarang-padalkar/)
- **GitHub**: [sarangspadalkar](https://github.com/sarangspadalkar)

---

Built with ❤️ using React, TypeScript, and TailwindCSS
