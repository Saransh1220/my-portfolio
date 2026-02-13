import { Component, signal, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherFileText } from '@ng-icons/feather-icons';

// Import components
import { HeroComponent } from './components/hero/hero.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  percentage: string;
  location: string;
  duration: string;
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    NgIcon,
    HeroComponent,
    SidebarComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  viewProviders: [provideIcons({ featherFileText })],
})
export class App {
  protected readonly title = signal('Saransh Sharma');

  // Personal Information
  protected readonly personalInfo = signal({
    name: 'Saransh Sharma',
    tagline: 'Full Stack Developer | Angular | Go | AWS',
    email: 'Saransh1220@gmail.com',
    phone: '+91 7876039602',
    linkedin: 'linkedin.com/in/saransh-sharma-68b400249',
    github: 'github.com/Saransh1220',
    location: 'Mohali, Punjab',
  });

  // Education
  protected readonly education = signal<Education[]>([
    {
      id: 1,
      degree: 'Master of Computer Applications',
      institution: 'Lovely Professional University',
      percentage: '75.9%',
      location: 'Phagwara, Punjab',
      duration: 'Sep. 2022– June 2024',
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Applications',
      institution: 'Chandigarh Group of Colleges',
      percentage: '74.9%',
      location: 'Landran, Punjab',
      duration: 'July 2019– July 2022',
    },
  ]);

  // Experience
  protected readonly experience = signal<Experience[]>([
    {
      id: 1,
      title: 'Junior Software Engineer',
      company: 'SourceFuse Technologies',
      location: 'Mohali, Punjab',
      duration: 'Aug 2024– Present',
      responsibilities: [
        'Developed and maintained Telescope Health, a comprehensive telehealth application using Angular and LoopBack 4 with microservices architecture',
        'Integrated third-party healthcare services including Athena Health for EHR management and Voyce for multilingual interpretation services',
        'Implemented real-time communication features using PubNub for instant messaging and notifications',
        'Leveraged AWS services (S3, SQS, SES) to ensure reliable and scalable telehealth operations',
        'Utilized New Relic for application performance monitoring, debugging, and optimization',
      ],
    },
    {
      id: 2,
      title: 'Web Development Trainee',
      company: 'Kreativan Technologies',
      location: 'Mohali, Punjab',
      duration: 'June 2021– August 2021',
      responsibilities: [
        'Engineered and deployed a dynamic University Management System using HTML, CSS, PHP, and SQL',
        'Achieved 40% decrease in administrative workload and 20% increase in student satisfaction',
      ],
    },
  ]);

  // Projects
  protected readonly projects = signal<Project[]>([
    {
      id: 1,
      title: 'Telescope Health - Telehealth Platform',
      description:
        'Built a production-grade telehealth application with microservices architecture handling patient management, appointment scheduling, and virtual consultations. Integrated Athena Health API for electronic health records, Voyce for real-time multilingual interpretation, and set up monitoring with Prometheus and Grafana for system observability.',
      technologies: ['Angular', 'LoopBack 4', 'PostgreSQL', 'AWS', 'PubNub', 'Prometheus', 'Grafana'],
      githubUrl: 'https://github.com/Saransh1220',
    },
    {
      id: 2,
      title: 'Blueprint-Audio - Audio Marketplace',
      description:
        'Full-stack audio beat/sample marketplace platform where producers upload beats with multi-tier licensing (Basic, Premium, Trackout, Unlimited) and buyers browse, preview, and purchase content. Built with modular architecture, real-time analytics, producer dashboard, Razorpay payments, and Cloudflare R2 storage.',
      technologies: [
        'Angular',
        'Go',
        'PostgreSQL',
        'Redis',
        'Cloudflare R2',
        'Docker',
        'Razorpay',
        'JWT',
      ],
      githubUrl: 'https://github.com/Saransh1220/Blueprint-Audio-Backend',
      liveUrl: 'https://github.com/Saransh1220/Blueprint-Audio',
    },
    {
      id: 3,
      title: 'CampusHUB - Community Discussion Platform',
      description:
        'Designed and developed a community-based web application enabling students to join interest-based communities and participate in Q&A discussions. Implemented user authentication, community management, and real-time post/comment functionality.',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'MongoDB'],
      githubUrl: 'https://github.com/Saransh1220',
    },
    {
      id: 4,
      title: 'Document Converter',
      description:
        'Created a serverless document conversion service supporting Word to PDF and PDF to Word conversions using AWS Lambda and S3 buckets. Extended functionality to support multiple file format conversions with automatic processing triggers.',
      technologies: ['AWS Lambda', 'S3', 'Python'],
      githubUrl: 'https://github.com/Saransh1220',
    },
  ]);

  // Skills
  protected readonly frontendSkills = signal([
    'Angular',
    'TypeScript',
    'HTML5',
    'CSS3',
    'TailwindCSS',
    'Bootstrap',
  ]);

  protected readonly backendSkills = signal([
    'Go',
    'Node.js',
    'Express.js',
    'LoopBack 4',
    'Python',
    'Sequelize ORM',
    'REST APIs',
    'Microservices',
    'JWT',
    'Razorpay',
  ]);

  protected readonly databases = signal(['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'SQL']);

  protected readonly cloudDevops = signal([
    'AWS (S3, SQS, SES, EC2, Lambda)',
    'Cloudflare R2',
    'Docker',
    'Redis',
    'Prometheus',
    'Grafana',
    'Git',
    'New Relic',
  ]);

  protected readonly tools = signal(['Jasmine', 'Karma', 'VS Code', 'PubNub']);

  // Certifications
  protected readonly certifications = signal([
    {
      name: 'Databricks Certified Generative AI Engineer – Associate',
      date: 'Dec 2025',
    },
    {
      name: 'AWS Certified Developer - Associate (DVA-C02)',
      date: 'June 2025',
    },
  ]);

  // Scribble trail effect
  private scribblePath: string = '';
  private pathPoints: { x: number; y: number; timestamp: number }[] = [];
  private lastX: number = 0;
  private lastY: number = 0;
  private isDrawing: boolean = false;
  private scribbleTimeout: any;
  private animationFrame: number | null = null;
  private currentPath: SVGElement | null = null;
  protected isMobileMenuOpen = false;

  constructor() {}

  ngOnInit() {
    // Component initialization logic here
  }

  ngAfterViewInit() {
    this.initializeScribbleEffect();
  }

  onMouseMove(event: MouseEvent) {
    this.createContinuousLine(event.clientX, event.clientY);
  }

  private createContinuousLine(x: number, y: number) {
    // Clear existing timeout
    if (this.scribbleTimeout) {
      clearTimeout(this.scribbleTimeout);
    }

    // If this is the first point, start a new path
    if (!this.isDrawing) {
      this.startNewPath(x, y, null as any);
      return;
    }

    // Calculate distance from last point
    const distance = Math.sqrt(Math.pow(x - this.lastX, 2) + Math.pow(y - this.lastY, 2));

    // Only add to path if moved enough distance
    if (distance > 5) {
      // Add new point to the path with timestamp
      const now = Date.now();
      this.pathPoints.push({ x, y, timestamp: now });
      this.lastX = x;
      this.lastY = y;

      // Start animation if not already running
      if (!this.animationFrame) {
        this.animatePath();
      }
    }

    // Set timeout to clear the line after mouse stops
    this.scribbleTimeout = setTimeout(() => {
      this.clearLine();
    }, 1000); // Faster clear timeout
  }

  private animatePath() {
    const now = Date.now();
    const maxAge = 300; // Points older than 300ms start fading

    // Remove old points
    this.pathPoints = this.pathPoints.filter((point) => now - point.timestamp < maxAge * 2);

    if (this.pathPoints.length === 0) {
      this.clearLine();
      return;
    }

    // Rebuild the path with fading segments
    this.rebuildPathWithFade();

    // Continue animation with faster frame rate
    this.animationFrame = requestAnimationFrame(() => this.animatePath());
  }

  private rebuildPathWithFade() {
    if (!this.currentPath) return;

    const now = Date.now();
    const maxAge = 300; // Points older than 300ms start fading

    // Create multiple path segments for different opacity levels
    let pathString = '';
    let opacitySegments: { path: string; opacity: number }[] = [];

    // Group points by age for different opacity levels
    for (let i = 0; i < this.pathPoints.length; i++) {
      const point = this.pathPoints[i];
      const age = now - point.timestamp;

      // Calculate opacity based on age with faster fade
      let opacity = 1;
      if (age > maxAge) {
        opacity = Math.max(0, 1 - (age - maxAge) / maxAge);
      }

      // Add point to current segment
      if (pathString === '') {
        pathString = `M${point.x},${point.y}`;
      } else {
        pathString += ` L${point.x},${point.y}`;
      }

      // If opacity changed, save current segment and start a new one
      if (i < this.pathPoints.length - 1) {
        const nextPoint = this.pathPoints[i + 1];
        const nextAge = now - nextPoint.timestamp;
        let nextOpacity = 1;
        if (nextAge > maxAge) {
          nextOpacity = Math.max(0, 1 - (nextAge - maxAge) / maxAge);
        }

        if (Math.abs(opacity - nextOpacity) > 0.05) {
          // More sensitive to opacity changes
          opacitySegments.push({ path: pathString, opacity });
          pathString = `M${point.x},${point.y}`;
        }
      } else {
        // Add the last segment
        opacitySegments.push({ path: pathString, opacity });
      }
    }

    // Clear existing paths
    while (this.currentPath.firstChild) {
      this.currentPath.removeChild(this.currentPath.firstChild);
    }

    // Create path elements for each opacity level
    opacitySegments.forEach((segment) => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', segment.path);
      path.setAttribute('stroke', 'var(--pencil-medium)');
      path.setAttribute('stroke-width', '1.5');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      path.setAttribute('opacity', segment.opacity.toString());
      if (this.currentPath) {
        this.currentPath.appendChild(path);
      }
    });
  }

  private startNewPath(x: number, y: number, container: HTMLElement) {
    // Create new SVG element for the path
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100vw');
    svg.setAttribute('height', '100vh');
    svg.style.position = 'fixed';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.pointerEvents = 'none';
    svg.style.zIndex = '1';

    // Create path element
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke', 'var(--pencil-medium)');
    path.setAttribute('stroke-width', '1.5');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('opacity', '0.7');

    // Start the path at the current position
    this.scribblePath = `M${x},${y}`;
    this.lastX = x;
    this.lastY = y;
    this.isDrawing = true;

    // Add path to SVG
    svg.appendChild(path);
    document.body.appendChild(svg);
    this.currentPath = svg;
  }

  private clearLine() {
    // Cancel animation frame
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }

    if (this.currentPath) {
      // Fade out the line
      this.currentPath.style.transition = 'opacity 0.5s ease';
      this.currentPath.style.opacity = '0';

      // Remove after fade out
      setTimeout(() => {
        if (this.currentPath) {
          this.currentPath.remove();
          this.currentPath = null;
        }
      }, 500);
    }

    // Reset drawing state
    this.isDrawing = false;
    this.scribblePath = '';
    this.pathPoints = [];
  }

  private clearAllScribbles() {
    this.clearLine();
  }

  private initializeScribbleEffect() {
    // Create scribble container if it doesn't exist
    if (!document.getElementById('scribble-container')) {
      const container = document.createElement('div');
      container.id = 'scribble-container';
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.pointerEvents = 'none';
      container.style.zIndex = '1';
      document.body.appendChild(container);
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    if (sidebar) {
      sidebar.classList.toggle('open', this.isMobileMenuOpen);
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    if (sidebar) {
      sidebar.classList.remove('open');
    }
  }
}
