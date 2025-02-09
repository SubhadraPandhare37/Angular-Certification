import { Routes } from '@angular/router';
import { TeslaModelColorComponent } from './components/tesla-model-color/tesla-model-color.component';
import { TeslaConfigComponent } from './components/tesla-config/tesla-config.component';
import { TeslaSummaryComponent } from './components/tesla-summary/tesla-summary.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'step1', // Redirect to default route
    pathMatch: 'full',
  },
  {
    path: 'step1',
    component: TeslaModelColorComponent,
  },
  {
    path: 'step2',
    component: TeslaConfigComponent,
  },
  {
    path: 'step3',
    component: TeslaSummaryComponent,
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: 'step1', pathMatch: 'full' },
];
