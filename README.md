# Personal Portfolio Website

A modern, responsive personal portfolio website built with React.js and Tailwind CSS featuring dark/light mode toggle, smooth animations, and a clean professional design.

## 🚀 Features

- **Modern & Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Smooth Animations**: Using Framer Motion for elegant page transitions and scroll animations
- **SEO Optimized**: Comprehensive meta tags for better search engine visibility
- **Component-Based Architecture**: Clean, reusable React components
- **Sticky Navigation**: Navbar that adapts based on scroll position
- **Smooth Scrolling**: Navigate smoothly between sections
- **Interactive Elements**: Hover effects, animated progress bars, and micro-animations

## 📋 Sections

1. **Hero Section**: Introduction with profile image, CTAs, and social links
2. **About Me**: Personal background and interests
3. **Skills**: Categorized skills with animated progress bars
4. **Projects**: Filterable project cards with tech stack and links
5. **Experience/Education**: Timeline view of education and work experience
6. **Contact**: Contact form and information
7. **Footer**: Quick links, social media, and back-to-top button

## 🛠️ Technologies Used

### Core
- **React.js**: Frontend framework
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework

### Libraries
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **Google Fonts (Inter)**: Typography

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository or navigate to the project directory:
```bash
cd /Users/ashan/Desktop/Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar with theme toggle
│   │   ├── Hero.jsx          # Hero section
│   │   ├── About.jsx         # About section
│   │   ├── Skills.jsx        # Skills with progress bars
│   │   ├── Projects.jsx      # Projects showcase with filtering
│   │   ├── Experience.jsx    # Experience/Education timeline
│   │   ├── Contact.jsx       # Contact form and info
│   │   └── Footer.jsx        # Footer with links
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark/light mode context
│   ├── assets/
│   │   └── images/           # Image assets
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles and Tailwind directives
├── index.html                # HTML template with SEO meta tags
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.jsx`):
   - Replace "Your Name" with your actual name
   - Update the profile image
   - Update social media links

2. **About Section** (`src/components/About.jsx`):
   - Customize the introduction text
   - Update university information
   - Adjust interests

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Adjust skill levels (percentages)

4. **Projects Section** (`src/components/Projects.jsx`):
   - Add your actual projects
   - Update project images, descriptions, and links
   - Modify tech stacks

5. **Experience Section** (`src/components/Experience.jsx`):
   - Add your education and work experience
   - Update achievements and descriptions

6. **Contact Section** (`src/components/Contact.jsx`):
   - Update email, phone, and location
   - Update social media links

7. **HTML Meta Tags** (`index.html`):
   - Update SEO meta tags (title, description, keywords)
   - Replace "Your Name" with your actual name

### Images

Replace placeholder images in the following components:
- Hero section: Profile image
- About section: About image
- Projects section: Project images

You can either:
- Use actual images by placing them in `src/assets/images/` and importing them
- Generate images using AI tools
- Use services like Unsplash for placeholder images

### Theme Colors

Modify `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize these color values
        500: '#0ea5e9',
        600: '#0284c7',
        // ...
      },
    },
  },
}
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on Netlify
3. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Deploy!

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 🎯 Features to Add (Optional)

- [ ] Blog section
- [ ] Testimonials section
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Contact form backend integration
- [ ] Real-time chat widget
- [ ] Resume/CV download functionality
- [ ] Project detail pages
- [ ] Animated cursor
- [ ] Page transitions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Your Name**
- University: Rajarata University of Sri Lanka
- Degree: BSc in Computer Science
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

Made with ❤️ using React and Tailwind CSS
