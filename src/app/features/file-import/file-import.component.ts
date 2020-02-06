import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FileStoreService } from './services/file-store.service';

@Component({
  selector: 'bb-file-import',
  templateUrl: './file-import.component.html',
  styleUrls: ['./file-import.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileImportComponent implements OnInit {
  issueCountField = new FormControl();

  records$ = this.fileStore.getFilteredRecords(null);

  constructor(private fileStore: FileStoreService) {}

  ngOnInit(): void {}

  onFileChange(evt: any) {
    this.fileStore.readFile(evt.target);
  }
}
