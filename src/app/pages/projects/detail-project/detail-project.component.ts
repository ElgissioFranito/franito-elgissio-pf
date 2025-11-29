import { ChangeDetectionStrategy, Component, inject, model, OnInit, signal } from '@angular/core';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-detail-project',
  imports: [],
  templateUrl: './detail-project.component.html',
  styleUrl: './detail-project.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailProjectComponent implements OnInit {
  idProject = model<number>();

  project = signal<any>({});
  screenshot = signal<string>("");

  sharedService = inject(SharedService);

  ngOnInit(): void {
    this.getProject();
  }

  getProject() {
    const projectChoose = this.sharedService.projects.find((project) => project.id === this.idProject());
    this.project.set(projectChoose);

    if (projectChoose?.screenshots[0]) {
      this.screenshot.set(projectChoose.screenshots[0]);
    }

  }

  onClose() {
    this.idProject.set(0);
  }

  showScreen(index: number) {
    if (this.project().screenshots[index]) {
      this.screenshot.set(this.project().screenshots[index]);
    }
  }

}
