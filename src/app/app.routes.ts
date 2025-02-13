import { Routes } from '@angular/router';
import { DetailProjectComponent } from './pages/projects/detail-project/detail-project.component';

export const routes: Routes = [
    {
        path: 'project/:id',
        component: DetailProjectComponent
    }
];
