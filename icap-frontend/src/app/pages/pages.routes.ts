import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainAgremiadoComponent } from './agremiado-main/agremiado-main';
import { EventoEditComponent } from './eventoo-main/eventoo-main';
import { GestionAgremiadoComponent } from './gestion-agremiado/gestion-agremiado';
import { FormxAgremiado } from './gestion-agremiado/formx-agremiado/formx-agremiado';
import { CursoComponent } from './courses/courses';
import { FormxCourses } from './courses/formx-courses/formx-courses';

export const pagesRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'agremiados', component: MainAgremiadoComponent },
  { path: 'evento', component: EventoEditComponent },
    {
    path: 'gsagremiados',
    component: GestionAgremiadoComponent,
    children: [
      { path: 'new', component: FormxAgremiado },
      { path: 'edit/:id', component: FormxAgremiado },
    ],
  },
  {
    path: 'gscursos',
    component: CursoComponent,
    children: [
      { path: 'new', component: FormxCourses },
      { path: 'edit/:id', component: FormxCourses },
    ],
  },

];
