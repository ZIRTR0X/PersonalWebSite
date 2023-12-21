import { Component } from '@angular/core';
import { Experience } from '../models/Experience';
import { Language } from '../models/Language';
import { Languages } from '../enums/ELanguage';
import { Education } from '../models/Education';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  public experiences: Experience[] = [
    new Experience(
      [
        Languages.Angular,
        Languages.Ionic,
        Languages.TypeScript,
        Languages.RxJS,
        Languages.Cypress,
        Languages.CouchDB,
      ],
      'Sep 2023',
      'Dec 2023',
      'Calaosoft',
      'Mobile Developer',
      'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.'
    ),
    new Experience(
      [
        Languages.Angular,
        Languages.Ionic,
        Languages.TypeScript,
        Languages.RxJS,
        Languages.Cypress,
        Languages.CouchDB,
      ],
      'Sep 2022',
      'Aug 2023',
      'Calaosoft',
      'Mobile Developer in apprenticeship',
      'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.'
    ),
    new Experience(
      [
        Languages.Laravel,
        Languages.PHP,
        Languages.JavasScript,
        Languages.AFrame,
      ],
      'Apr 2022',
      'Jun 2022',
      'AFA-MULTIMEDIA',
      'Internship in Web Developmen',
      ''
    ),
  ];

  public educations: Education[] = [
    new Education(
      'Sep 2022',
      'Aug 2023',
      'Clermont Auvergne University (UCA), France',
      'Third year of a computer science degree specializing in mobile application',
      ''
    ),
    new Education(
      'Sep 2020',
      'Jun 2022',
      'Clermont Auvergne University (UCA), France',
      'University Technology Diploma in Computer Science',
      ''
    ),
    new Education(
      'Sep 2018',
      'Jul 2020',
      'Lycée Saint-Joseph, Marvejols',
      'Scientific Baccalaureate, specializing in Mathematics',
      ''
    ),
  ];
}
