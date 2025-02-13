import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  theme = signal<string>('dark');

  projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description 1',
      detail: 'Detail 1',
      background: 'https://via.placeholder.com/150',
      screenshots: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ],
      technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
      github: 'https://github.com',
      demo: 'https://example.com',
      isPrivate: false
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description 2',
      detail: 'Detail 2',
      background: 'https://via.placeholder.com/150',
      screenshots: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ],
      technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
      github: 'https://github.com',
      demo: 'https://example.com',
      isPrivate: false
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description 3',
      detail: 'Detail 3',
      background: 'https://via.placeholder.com/150',
      screenshots: [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ],
      technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
      github: 'https://github.com',
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
