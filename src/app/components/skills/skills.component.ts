import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  @Input() frontendSkills: string[] = [];
  @Input() backendSkills: string[] = [];
  @Input() databases: string[] = [];
  @Input() cloudDevops: string[] = [];
  @Input() tools: string[] = [];
}
