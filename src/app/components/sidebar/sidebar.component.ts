import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { hugeLinkedin02, hugeGithub } from '@ng-icons/huge-icons';
import {
  featherHome,
  featherUser,
  featherBriefcase,
  featherCode,
  featherTool,
  featherMail,
  featherFileText,
} from '@ng-icons/feather-icons';
@Component({
  selector: 'app-sidebar',
  imports: [NgIcon],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  viewProviders: [
    provideIcons({
      featherHome,
      featherUser,
      featherBriefcase,
      featherCode,
      featherTool,
      featherMail,
      featherFileText,
      hugeLinkedin02,
      hugeGithub,
    }),
  ],
})
export class SidebarComponent {
  @Input() personalInfo: any;
  activeSection: string = 'home';

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId;
    }
  }
}
