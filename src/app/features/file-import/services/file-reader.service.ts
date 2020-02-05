import { Injectable } from '@angular/core';
import { AOA } from '@file/models/file-import-models';
import { Observable, Subject } from 'rxjs';
import * as XLSX from 'xlsx';

@Injectable()
export class FileReaderService {
  private recs = new Subject<AOA>();

  read(target: DataTransfer): Observable<AOA> {
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.recs.next(XLSX.utils.sheet_to_json(ws, { header: 1 }));
    };
    reader.readAsBinaryString(target.files[0]);
    return this.recs.asObservable();
  }
}