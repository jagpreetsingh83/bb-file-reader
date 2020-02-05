import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'src/app/shared/models/app.enums';

import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: AppRoutes.ERROR, component: NotFoundComponent },
  { path: AppRoutes.ANY, component: NotFoundComponent, data: { error: 404 } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorHandlerRoutingModule {}
