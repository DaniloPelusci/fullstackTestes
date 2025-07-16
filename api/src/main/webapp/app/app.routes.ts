import { Routes } from '@angular/router';
import { EditalListComponent } from './edital/edital-list.component';
import { EditalFormComponent } from './edital/edital-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'editais', pathMatch: 'full' },
  { path: 'editais', component: EditalListComponent },
  { path: 'editais/:id', component: EditalFormComponent }
];
