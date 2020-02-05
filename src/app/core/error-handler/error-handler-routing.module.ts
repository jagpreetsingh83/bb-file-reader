import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'src/app/shared/models/app.models';

import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: AppRoutes.ERROR, component: ErrorComponent },
  { path: AppRoutes.ANY, component: ErrorComponent, data: { error: 404 } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorHandlerRoutingModule {}
