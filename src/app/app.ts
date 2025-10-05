import { Component, signal, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

// Import components
import { HeroComponent } from './components/hero/hero.component';
import { NavigationComponent } from './components/navigation/navigation.component';
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
    HeroComponent,
    NavigationComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Saransh Sharma');
  
  // Personal Information
  protected readonly personalInfo = signal({
    name: 'Saransh Sharma',
    tagline: 'Full Stack Developer | Cloud Enthusiast | AWS Certified',
    email: 'Saransh1220@gmail.com',
    phone: '+91 7876039602',
    linkedin: 'linkedin.com/in/saransh-sharma-68b400249',
    github: 'github.com/Saransh1220',
    location: 'Mohali, Punjab'
  });

  // Education
  protected readonly education = signal<Education[]>([
    {
      id: 1,
      degree: 'Master of Computer Applications',
      institution: 'Lovely Professional University',
      percentage: '75.9%',
      location: 'Phagwara, Punjab',
      duration: 'Sep. 2022– June 2024'
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Applications',
      institution: 'Chandigarh Group of Colleges',
      percentage: '74.9%',
      location: 'Landran, Punjab',
      duration: 'July 2019– July 2022'
    }
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
        'Utilized New Relic for application performance monitoring, debugging, and optimization'
      ]
    },
    {
      id: 2,
      title: 'Web Development Trainee',
      company: 'Kreativan Technologies',
      location: 'Mohali, Punjab',
      duration: 'June 2021– August 2021',
      responsibilities: [
        'Engineered and deployed a dynamic University Management System using HTML, CSS, PHP, and SQL',
        'Achieved 40% decrease in administrative workload and 20% increase in student satisfaction'
      ]
    }
  ]);

  // Projects
  protected readonly projects = signal<Project[]>([
    {
      id: 1,
      title: 'Telescope Health - Telehealth Platform',
      description: 'Built a production-grade telehealth application with microservices architecture handling patient management, appointment scheduling, and virtual consultations. Integrated Athena Health API for electronic health records and Voyce for real-time multilingual interpretation.',
      technologies: ['Angular', 'LoopBack 4', 'PostgreSQL', 'AWS', 'PubNub'],
      githubUrl: 'https://github.com/Saransh1220'
    },
    {
      id: 2,
      title: 'CampusHUB - Community Discussion Platform',
      description: 'Designed and developed a community-based web application enabling students to join interest-based communities and participate in Q&A discussions. Implemented user authentication, community management, and real-time post/comment functionality.',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'MongoDB'],
      githubUrl: 'https://github.com/Saransh1220'
    },
    {
      id: 3,
      title: 'Document Converter',
      description: 'Created a serverless document conversion service supporting Word to PDF and PDF to Word conversions using AWS Lambda and S3 buckets. Extended functionality to support multiple file format conversions with automatic processing triggers.',
      technologies: ['AWS Lambda', 'S3', 'Python'],
      githubUrl: 'https://github.com/Saransh1220'
    }
  ]);

  // Skills
  protected readonly frontendSkills = signal([
    'Angular', 'React', 'Next.js', 'TypeScript', 'HTML5', 'CSS3', 'TailwindCSS', 'Bootstrap'
  ]);

  protected readonly backendSkills = signal([
    'Node.js', 'Express.js', 'LoopBack 4', 'Python', 'Sequelize ORM', 'REST APIs', 'Microservices'
  ]);

  protected readonly databases = signal([
    'PostgreSQL', 'MongoDB', 'MySQL', 'SQL'
  ]);

  protected readonly cloudDevops = signal([
    'AWS (S3, SQS, SES, EC2, Lambda)', 'Docker', 'Git', 'New Relic'
  ]);

  protected readonly tools = signal([
    'Jasmine', 'Karma', 'VS Code', 'PubNub'
  ]);

  // Certifications
  protected readonly certifications = signal([
    {
      name: 'AWS Certified Developer - Associate (DVA-C02)',
      date: 'June 2025'
    }
  ]);

  // Scribble trail effect
  private scribbleElements: HTMLElement[] = [];
  private maxScribbles = 5;
  private scribbleTimeout: any;

  constructor() {}

  ngOnInit() {
    // Component initialization logic here
  }

  ngAfterViewInit() {
    this.initializeScribbleEffect();
  }

  onMouseMove(event: MouseEvent) {
    this.createScribble(event.clientX, event.clientY);
  }

  private createScribble(x: number, y: number) {
    // Clear existing timeout
    if (this.scribbleTimeout) {
      clearTimeout(this.scribbleTimeout);
    }

    // Create new scribble element
    const scribble = document.createElement('div');
    scribble.className = 'scribble-trail';
    scribble.style.left = `${x}px`;
    scribble.style.top = `${y}px`;
    
    // Generate random scribble path
    const path = this.generateScribblePath();
    scribble.innerHTML = `
      <svg width="40" height="40" style="position: absolute; transform: translate(-20px, -20px);">
        <path d="${path}" stroke="var(--scribble-color)" stroke-width="1.5" fill="none" opacity="0.6"/>
      </svg>
    `;

    // Add to container
    const container = document.getElementById('scribble-container');
    if (container) {
      container.appendChild(scribble);
      this.scribbleElements.push(scribble);

      // Remove old scribbles if we have too many
      if (this.scribbleElements.length > this.maxScribbles) {
        const oldScribble = this.scribbleElements.shift();
        if (oldScribble) {
          oldScribble.remove();
        }
      }

      // Fade out and remove
      setTimeout(() => {
        scribble.style.opacity = '0';
        setTimeout(() => {
          scribble.remove();
          const index = this.scribbleElements.indexOf(scribble);
          if (index > -1) {
            this.scribbleElements.splice(index, 1);
          }
        }, 500);
      }, 100);

      // Set timeout to clear all scribbles after mouse stops
      this.scribbleTimeout = setTimeout(() => {
        this.clearAllScribbles();
      }, 2000);
    }
  }

  private generateScribblePath(): string {
    const paths = [
      'M10,20 Q15,10 20,15 T30,10',
      'M15,15 Q20,25 25,15 T35,20',
      'M8,12 Q18,8 22,18 T32,12',
      'M12,8 Q8,18 18,22 T28,16',
      'M20,10 Q10,15 15,25 T25,15'
    ];
    return paths[Math.floor(Math.random() * paths.length)];
  }

  private clearAllScribbles() {
    this.scribbleElements.forEach(scribble => {
      scribble.style.opacity = '0';
      setTimeout(() => scribble.remove(), 300);
    });
    this.scribbleElements = [];
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
      container.style.zIndex = '9999';
      document.body.appendChild(container);
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
