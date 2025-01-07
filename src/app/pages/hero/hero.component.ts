import { Component } from '@angular/core';
import { PresentationComponent } from './presentation/presentation.component';
import { PhotoProfilComponent } from './photo-profil/photo-profil.component';

@Component({
  selector: 'app-hero',
  imports: [
    PresentationComponent,
    PhotoProfilComponent
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
