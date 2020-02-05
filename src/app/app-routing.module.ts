import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from './shared/models/app.enums';

const routes: Routes = [
  { path: '', redirectTo: AppRoutes.FILE_IMPORT, pathMatch: 'full' },
  {
    path: AppRoutes.FILE_IMPORT,
    loadChildren: () =>
      import('./features/file-import/file-import.module').then(
        m => m.FileImportModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
