import { Component } from '@angular/core';

export interface Experience {
  languages: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  public experiences: Experience = { languages: ['C#', 'Java', 'JavaScript'] };
}
