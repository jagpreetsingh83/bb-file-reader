import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { TableComponent } from './components/table/table.component';
import { FileImportRoutingModule } from './file-import-routing.module';
import { FileImportComponent } from './file-import.component';

@NgModule({
  declarations: [FileImportComponent, TableComponent],
  imports: [SharedModule, FileImportRoutingModule]
})
export class FileImportModule {}
