import { Component } from '@angular/core';
import { Experience } from '../models/Experience';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  public experiences: Experience[] = [
    new Experience(
      ['C#', 'ASP.NET', 'SQL'],
      2017,
      2018,
      'Calaosoft',
      'Front-End Developer',
      'Developed a web application for a client using ASP.NET MVC and SQL Server.'
    ),
  ];
}
