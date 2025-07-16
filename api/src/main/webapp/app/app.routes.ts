import { Routes } from '@angular/router';
import { EditalListComponent } from './edital/edital-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'editais', pathMatch: 'full' },
  { path: 'editais', component: EditalListComponent }
];
