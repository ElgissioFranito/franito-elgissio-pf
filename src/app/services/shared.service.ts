import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  theme = signal<string>('dark');

  projects = [
    {
      id: 1,
      title: 'GED',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore.',
      detail: `A company is transitioning to a fully digital Document Management System (DMS) to optimize workflow. 
              The primary goal is to centralize and secure documents, enhancing collaboration and control over sensitive 
              information. The system will integrate advanced search and access control features, while ensuring security 
              and regulatory compliance. The intuitive interface will facilitate employee adoption. The project aims to 
              reduce paper-related costs and increase productivity`,
      background: 'https://placeholder.pics/svg/300x240/FF3213/FF591D-FFFFFF',
      screenshots: [
        'https://placeholder.pics/svg/300x240/41F2FF-FF4F2F/FF591D-FFFFFF',
        'https://placeholder.pics/svg/300x240/5F25FF-88FF62/FF591D-FFFFFF',
        'https://placeholder.pics/svg/300x240/FF3213-FF31CA/FF591D-FFFFFF'
      ],
      technologies: ['Angular', 'Laravel', 'MySQL'],
      demo: 'https://example.com',
      isPrivate: false
    },
    {
      id: 2,
      title: 'Les professionnels de Madagascar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore.',
      detail: 'Detail 2',
      background: 'https://placeholder.pics/svg/300x240/FF50B9/FF591D-FFFFFF',
      screenshots: [
        'https://placeholder.pics/svg/300x240/41F2FF-FF4F2F/FF591D-FFFFFF',
        'https://placeholder.pics/svg/300x240/5F25FF-88FF62/FF591D-FFFFFF',
        'https://placeholder.pics/svg/300x240/FF3213-FF31CA/FF591D-FFFFFF'
      ],
      technologies: ['Angular SSR', 'Laravel', 'MySQL'],
      demo: 'https://example.com',
      isPrivate: false
    },
    {
      id: 3,
      title: 'Gestion de Stock',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore.',
      detail: 'Detail 3',
      background: 'https://placeholder.pics/svg/300x240/15C108/FF591D-FFFFFF',
      screenshots: [
        'https://placeholder.pics/svg/300x240/41F2FF-FF4F2F/FF591D-FFFFFF',
        'https://placeholder.pics/svg/300x240/5F25FF-88FF62/FF591D-FFFFFF',
        'https://placeholder.pics/svg/300x240/FF3213-FF31CA/FF591D-FFFFFF'
      ],
      technologies: ['Angular', 'Laravel', 'MySQL'],
      demo: 'https://example.com',
      isPrivate: false
    }
  ]

  preloadImages(urls: string[]): Promise<void[]> {
    const promises = urls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve();
        })
    );
    return Promise.all(promises);
  }

}
