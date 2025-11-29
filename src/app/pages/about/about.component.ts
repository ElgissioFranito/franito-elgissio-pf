import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageAboutComponent } from './image-about/image-about.component';
import { DetailAboutComponent } from './detail-about/detail-about.component';

@Component({
  selector: 'app-about',
  imports: [
    ImageAboutComponent,
    DetailAboutComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {


}
