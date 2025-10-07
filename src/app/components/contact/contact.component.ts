import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {featherLinkedin, featherGithub} from '@ng-icons/feather-icons';

@Component({
  selector: 'app-contact',
  imports: [NgIcon],
  viewProviders: [provideIcons({
    featherLinkedin,
    featherGithub
  })],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() personalInfo: any;
  
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}