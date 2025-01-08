import { Component, inject } from '@angular/core';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-photo-profil',
  imports: [],
  templateUrl: './photo-profil.component.html',
  styleUrl: './photo-profil.component.scss'
})
export class PhotoProfilComponent {
  sharedService = inject(SharedService);
}
