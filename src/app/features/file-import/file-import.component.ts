import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FileRecord } from './models/file-import-models';
import { FileStoreService } from './services/file-store.service';

@Component({
  selector: 'bb-file-import',
  templateUrl: './file-import.component.html',
  styleUrls: ['./file-import.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileImportComponent implements OnInit {
  records$: Observable<FileRecord[]>;

  constructor(private fileStore: FileStoreService) {}

  ngOnInit(): void {
    this.records$ = this.fileStore.getFilteredRecords(null);
  }

  onFileChange(evt: any) {
    this.fileStore.readFile(evt.target);
  }
}
