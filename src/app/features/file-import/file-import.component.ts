import { Component } from '@angular/core';

import { FileStoreService } from './services/file-store.service';

@Component({
  selector: 'bb-file-import',
  templateUrl: './file-import.component.html',
  styleUrls: ['./file-import.component.scss']
})
export class FileImportComponent {
  constructor(private fileStore: FileStoreService) {}

  onFileChange(evt: any) {
    this.fileStore.readFile(evt.target);
  }
}
