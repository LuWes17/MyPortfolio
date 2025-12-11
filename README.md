# Portfolio Website - Jan Louise Bon

A modern, responsive portfolio website built with React and CSS Modules, showcasing my work as a Full Stack Developer specializing in the MERN stack.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Single Page Application**: Smooth scrolling navigation between sections
- **Modern UI**: Clean design with gold/black/white color scheme
- **Interactive Components**:
  - Typing animation on home section
  - Filterable project portfolio
  - Animated statistics cards
  - Interactive contact form UI
- **Sections**:
  - Home - Hero section with animated title
  - About Me - Bio and key statistics
  - Resume - Education, experience, and skills
  - Portfolio - Filterable project showcase
  - Contact - Contact information and form

## 🛠️ Technologies Used

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Icons**: React Icons
- **Animations**: React Type Animation
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── profile-placeholder.jpg
│   └── project-images/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable components
│   │   ├── layout/          # Layout components (Sidebar, SocialBar)
│   │   └── sections/        # Page sections
│   ├── context/             # React context for state management
│   ├── data/                # Static data (CV content)
│   ├── hooks/               # Custom React hooks
│   ├── styles/              # Global styles and CSS variables
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── vercel.json
```

## 🎨 Customization

### Update Personal Information

Edit the files in the `/src/data/` directory:
- `personalInfo.js` - Name, contact, links
- `about.js` - About text and statistics
- `education.js` - Education history
- `experience.js` - Work experience
- `projects.js` - Project details
- `skills.js` - Technical skills
- `social.js` - Social media links

### Add Your Images

Replace the placeholder files in `/public/`:
- `profile-placeholder.jpg` - Your profile picture (400x400px recommended)
- `project-images/*.jpg` - Your project screenshots

### Modify Colors

Edit `/src/styles/variables.css` to change the color scheme:
```css
--color-primary: #F4C430;  /* Gold/Yellow accent color */
--color-black: #0F0F0F;    /* Primary text color */
--color-white: #FFFFFF;    /* Background color */
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and deploy
4. Your site will be live!

### Manual Deployment

```bash
npm run build
# Upload the dist/ folder to your hosting service
```

## 📝 Adding New Projects

To add a new project to your portfolio:

1. Add project images to `/public/project-images/`
2. Open `/src/data/projects.js`
3. Add a new project object to the `projects` array:

```javascript
{
  id: 4,
  title: "Your Project Name",
  category: "Full Stack", // or "Mobile" or "Web Platform"
  tags: ["React", "Node.js", ...],
  description: "Project description...",
  features: ["Feature 1", "Feature 2", ...],
  period: "Month Year – Month Year",
  status: "Completed",
  images: ["/project-images/your-project.jpg"],
  github: "https://github.com/...",
  demo: "https://..."
}
```

## ✨ Features to Add Later

- [ ] Functional contact form with EmailJS
- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Downloadable resume PDF
- [ ] Google Analytics integration
- [ ] SEO optimization
- [ ] Loading animations
- [ ] Project detail modals

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Jan Louise Bon**
- Email: jan_bon@dlsu.edu.ph
- LinkedIn: [linkedin.com/in/louise](https://linkedin.com/in/louise)
- GitHub: [github.com/louise](https://github.com/louise)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio templates
- Icons from React Icons
- Fonts from Google Fonts (Inter & Poppins)

---

Built with ❤️ using React and Vite
