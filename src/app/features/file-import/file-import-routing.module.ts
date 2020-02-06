import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FileImportComponent } from './components/file-import.component';

const routes: Routes = [{ path: '', component: FileImportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileImportRoutingModule {}
