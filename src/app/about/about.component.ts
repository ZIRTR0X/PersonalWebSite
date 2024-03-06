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
        Languages.SCRUM,
      ],
      'Sep 2023',
      'Dec 2023',
      'Calaosoft',
      'Mobile Developer',
      'Development of crossplatform, offlinefirst and mobilefirst applications using SCRUM agile methodology.'
    ),
    new Experience(
      [
        Languages.Angular,
        Languages.Ionic,
        Languages.TypeScript,
        Languages.RxJS,
        Languages.Cypress,
        Languages.CouchDB,
        Languages.SCRUM,
      ],
      'Sep 2022',
      'Aug 2023',
      'Calaosoft',
      'Mobile Developer in apprenticeship',
      'Development of crossplatform, offlinefirst and mobilefirst applications using SCRUM agile methodology.'
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
      "Development of web applications using A-FRAME, a framework based on Three.js. The apps can be used ''normally'', but also with VR headsets."
    ),
  ];

  public educations: Education[] = [
    new Education(
      'Sep 2022',
      'Aug 2023',
      'Clermont Auvergne University (UCA)',
      'Third year of a computer science degree specializing in mobile application',
      ''
    ),
    new Education(
      'Sep 2020',
      'Jun 2022',
      'Clermont Auvergne University (UCA)',
      'University Technology Diploma in Computer Science',
      ''
    ),
    new Education(
      'Sep 2018',
      'Jul 2020',
      'Saint-Joseph High School, Marvejols',
      'Scientific Baccalaureate, specializing in Mathematics',
      ''
    ),
  ];
}
