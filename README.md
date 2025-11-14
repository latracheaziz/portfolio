# Portfolio - Aziz Latrache

A modern, responsive portfolio website built with React for showcasing student projects, skills, and experience. Perfect for students looking for end-of-study internship opportunities.

## Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Multi-language Support** - Switch between English and French with a single click
- **Professional Layout** - Clean and modern design with smooth animations
- **Resume Download** - One-click resume download functionality
- **Scroll Animations** - Elements animate into view as you scroll
- **Interactive Components** - Hover effects and smooth transitions
- **Organized Codebase** - Component-based architecture with separated concerns

## Sections

- Hero section with animated background and call-to-action buttons
- About section with personal introduction
- Education background with animated cards
- Technical skills showcase organized by categories
- Projects portfolio with GitHub and demo links
- Contact information with clickable links
- Professional footer

## Technologies Used

- React 19
- Ant Design 5
- CSS3 with animations and transitions
- JavaScript ES6+
- Intersection Observer API for scroll animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
portfolio/
├── public/
│   ├── Aziz Latrache Resume.pdf
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Education.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── constants/
│   │   └── data.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Education.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Customization

### Update Personal Information

All personal data is stored in `src/constants/data.js`. Update the following objects:

- `personalInfo` - Name, title, contact details
- `about` - Personal description (in both English and French)
- `education` - Educational background
- `skills` - Technical skills organized by category
- `projects` - Project details with links
- `translations` - All UI text in both languages

### Change Colors and Styling

Each component has its own CSS file in `src/styles/`. The main color scheme uses:
- Primary gradient: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- You can modify these in the respective CSS files

### Replace Resume

Replace `public/Aziz Latrache Resume.pdf` with your own resume file and update the path in `src/constants/data.js`.

## Features Breakdown

### Animations

- **Hero Section**: Floating shapes animation, text slide-in effects, scroll indicator
- **Section Titles**: Fade-in and underline animation on scroll
- **Cards**: Hover effects with lift and shadow transitions
- **Skills Tags**: Gradient hover effect with scale transformation
- **Navigation**: Smooth scroll and highlight effects

### Responsive Design

- Mobile-first approach
- Hamburger menu for mobile devices
- Flexible grid layouts
- Optimized for all screen sizes

### Performance

- Code splitting by components
- Lazy loading with Intersection Observer
- Optimized animations with CSS transforms
- Minimal re-renders with React hooks

## Available Scripts

- `npm start` - Run development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App

## Deployment

Deploy this portfolio to:

- **Vercel** - `vercel --prod`
- **Netlify** - Drag and drop the build folder
- **GitHub Pages** - Use gh-pages package
- **Firebase Hosting** - `firebase deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

Aziz Latrache
- Email: aziz.latrache@example.com
- LinkedIn: linkedin.com/in/azizlatrache
- GitHub: github.com/azizlatrache
