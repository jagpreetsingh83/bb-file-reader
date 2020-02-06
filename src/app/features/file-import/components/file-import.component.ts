import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '@app/shared/components/base/base.component';
import { NGXLogger } from 'ngx-logger';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';

import { FileStoreService } from '../services/file-store.service';

@Component({
  selector: 'bb-file-import',
  templateUrl: './file-import.component.html',
  styleUrls: ['./file-import.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileImportComponent extends BaseComponent implements OnInit {
  issueCountField = new FormControl();

  loading$ = this.fileStore.selectLoading$;
  records$ = this.fileStore.filteredRecords$;

  fileName: string;

  constructor(private fileStore: FileStoreService, private logger: NGXLogger) {
    super();
  }

  ngOnInit(): void {
    this.issueCountField.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(input =>
          this.logger.debug('Applying filter on Issue Count', input)
        ),
        takeUntil(this.destroyed)
      )
      .subscribe(input => this.fileStore.setIssueCount(input));
  }

  onFileChange(evt: any) {
    this.logger.debug('Resetting...');
    this.issueCountField.reset();
    this.fileStore.reset();
    this.fileStore.readFile(evt.target);
    this.fileName = evt.target.files && evt.target.files[0].name;
  }
}
