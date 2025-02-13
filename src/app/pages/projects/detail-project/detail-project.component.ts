import { Component, inject, model, OnInit, signal } from '@angular/core';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-detail-project',
  imports: [],
  templateUrl: './detail-project.component.html',
  styleUrl: './detail-project.component.scss'
})
export class DetailProjectComponent implements OnInit{
  idProject = model<number>();

  project = signal<any>({});

  sharedService = inject(SharedService);

  ngOnInit(): void {
    this.getProject();
  }

  getProject() {
    const projectChoose = this.sharedService.projects.find((project) => project.id === this.idProject());
    this.project.set(projectChoose);
    console.log(this.project());    
  }

  onClose() {
    this.idProject.set(0);
  }

  

}
