import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { FileImportRoutingModule } from './file-import-routing.module';
import { FileImportComponent } from './file-import.component';

@NgModule({
  declarations: [FileImportComponent],
  imports: [SharedModule, FileImportRoutingModule]
})
export class FileImportModule {}
