import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  onMouseMove(event: MouseEvent) {
    const { currentTarget: target } = event as any;
    // const rect = target?.getBoundingClientRect(),
    //   x = event.clientX - rect.left,
    //   y = event.clientY - rect.top;

    // target?.style.setProperty('--mouse-x', `${x}px`);
    // target?.style.setProperty('--mouse-y', `${y}px`);

    let mouseX = event.pageX - target.offsetLeft;
    let mouseY = event.pageY - target.offsetTop;

    target.style.setProperty('--mouse-x', `${mouseX}px`);
    target.style.setProperty('--mouse-y', `${mouseY}px`);
  }
}
