import { Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PlanComponent } from './plan/plan.component';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [  
  { path: 'personalinfo', component: PersonalInfoComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'addons', component: AddOnsComponent },
  { path: 'summary', component: SummaryComponent },
  { path: '', redirectTo: 'personalinfo', pathMatch: 'full' },
  { path: '**', redirectTo: 'personalinfo' }
];
