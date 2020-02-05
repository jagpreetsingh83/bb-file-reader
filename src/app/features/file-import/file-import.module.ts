import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from 'src/app/shared/shared.module';

import { TableComponent } from './components/table/table.component';
import { FileImportRoutingModule } from './file-import-routing.module';
import { FileImportComponent } from './file-import.component';
import * as FileStore from './store';

@NgModule({
  declarations: [FileImportComponent, TableComponent],
  imports: [
    SharedModule,
    FileImportRoutingModule,
    StoreModule.forFeature(FileStore.fileFeatureKey, FileStore.reducer),
    EffectsModule.forFeature([FileStore.FileEffects])
  ]
})
export class FileImportModule {}
