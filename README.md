# Saransh Sharma - Portfolio

A modern, responsive portfolio website built with Angular 20, featuring a unique notebook-style design with sketch elements and interactive effects.

## 🎨 Features

- **Notebook-Style Design**: Paper-like background with grid lines and sketch elements
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Interactive Elements**: Scribble trail effect following mouse movement
- **Component Architecture**: Maintainable codebase with modular components
- **Modern Tech Stack**: Angular 20, TypeScript, SCSS, HTML5

## 🚀 Automated Deployment

This portfolio is set up with automated deployment to GitHub Pages. Whenever you push changes to the `main` branch, the following happens:

1. GitHub Actions workflow is triggered
2. The project is built using Angular CLI
3. The built files are automatically deployed to GitHub Pages
4. Your live portfolio is updated within minutes

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/          # Angular components
│   │   │   ├── hero/           # Hero section
│   │   │   ├── navigation/     # Navigation bar
│   │   │   ├── about/          # About section
│   │   │   ├── experience/     # Experience section
│   │   │   ├── projects/       # Projects section
│   │   │   ├── skills/         # Skills section
│   │   │   ├── education/      # Education section
│   │   │   └── contact/        # Contact section
│   │   ├── app.html           # Main app template
│   │   ├── app.ts             # Main app component
│   │   └── app.scss           # Global styles
│   ├── styles.scss            # Global styles
│   └── index.html             # HTML entry point
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions workflow
├── angular.json               # Angular configuration
├── package.json               # NPM dependencies
└── README.md                  # This file
```

## 🛠️ Local Development

To run this project locally:

1. Clone the repository
   ```bash
   git clone https://github.com/Saransh1220/Saransh1220.github.io.git
   cd Saransh1220.github.io
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200/`

## 📦 Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run build:prod` - Builds the project with production optimizations
- `npm run deploy` - Deploys the project to GitHub Pages
- `npm test` - Runs the unit tests

## 🌐 Deployment

### Automated Deployment (Recommended)

The project is configured for automatic deployment to GitHub Pages. Simply push your changes to the `main` branch:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Your changes will be automatically built and deployed to GitHub Pages.

### Manual Deployment

If you need to deploy manually:

1. Build the project
   ```bash
   npm run build:prod
   ```

2. Deploy to GitHub Pages
   ```bash
   npm run deploy
   ```

## 🎯 Customization

### Adding New Sections

1. Create a new component in `src/app/components/`
2. Import and add it to `src/app/app.ts`
3. Add the component to `src/app/app.html`
4. Add navigation link in `src/app/components/navigation/`

### Updating Personal Information

Edit the data in `src/app/app.ts`:
- `personalInfo` - Your name, tagline, contact details
- `education` - Your educational background
- `experience` - Your work experience
- `projects` - Your featured projects
- `skills` - Your technical skills
- `certifications` - Your certifications

### Modifying Styles

- Global styles: `src/app/app.scss`
- Component-specific styles: `src/app/components/[component]/[component].scss`
- Theme variables: `src/styles.scss`

## 🔧 GitHub Actions Workflow

The deployment workflow (`.github/workflows/deploy.yml`) includes:

- **Build Job**: Installs dependencies and builds the project
- **Deploy Job**: Deploys the built files to GitHub Pages
- **Triggers**: Runs on push to `main` branch and pull requests
- **Permissions**: Configured with necessary permissions for deployment

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Large Desktop (1200px+)
- Desktop (1024px-1199px)
- Tablet (768px-1023px)
- Mobile (600px-767px)
- Small Mobile (480px-599px)
- Ultra Small (360px-479px)

## 🎨 Design System

The portfolio uses a notebook-style design with:
- Paper-like background with grid lines
- Sketch-style borders and circular elements
- Hand-drawn typography using Google Fonts
- Pencil-like color scheme
- Interactive hover effects and animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request.

---

Built with ❤️ by Saransh Sharma
