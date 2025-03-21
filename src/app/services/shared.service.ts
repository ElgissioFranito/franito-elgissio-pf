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
        'https://placeholder.pics/svg/300x240/41F2FF-FF4F2F',
        'https://placeholder.pics/svg/300x240/5F25FF-88FF62',
        'https://placeholder.pics/svg/300x240/FF3213-FF31CA'
      ],
      technologies: ['Angular', 'Laravel', 'MySQL'],
      demo: 'https://example.com',
      isPrivate: true
    },
    {
      id: 2,
      title: 'Les professionnels de Madagascar',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore.',
      detail: `This business directory website in Madagascar helps companies list their services, contact details, and 
              promotions. It includes advanced search, categorization, and a gallery to showcase businesses. An announcements 
              section and a news page keep users updated on market trends. The platform makes it easier for customers to 
              discover and connect with businesses. Designed for visibility and engagement, it supports business growth and 
              networking opportunities.`,
      background: 'project/lpm-01.jpg',
      screenshots: [
        'project/lpm-01.jpg',
        'project/lpm-02.jpg',
        'project/lpm-03.jpg'
      ],
      technologies: ['Angular SSR', 'Laravel', 'MySQL'],
      demo: 'https://lpm-public.vercel.app/',
      isPrivate: false
    },
    {
      id: 3,
      title: 'Stock Management',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore.',
      detail: `A motorcycle sales company is looking for a stock management system that records stock inflows and 
                  outflows while enabling accurate product tracking. Automated low-stock alerts help prevent shortages. 
                  The platform also facilitates inter-warehouse transfers, optimizing inventory distribution across multiple 
                  locations. Comprehensive reporting tools provide valuable insights into stock movements and trends, 
                  allowing for better decision-making. Security and access controls ensure that only authorized personnel 
                  can manage inventory data. The system allows employees to update and monitor stock in real time with ease.`,
      background: 'https://placeholder.pics/svg/300x240/15C108/FF591D-FFFFFF',
      screenshots: [
        'https://placeholder.pics/svg/300x240/41F2FF-FF4F2F/FF591D-FFFFFF',
        'https://placeholder.pics/svg/300x240/5F25FF-88FF62/FF591D-FFFFFF',
        'https://placeholder.pics/svg/300x240/FF3213-FF31CA/FF591D-FFFFFF'
      ],
      technologies: ['Angular', 'Laravel', 'MySQL'],
      demo: 'https://example.com',
      isPrivate: true
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
