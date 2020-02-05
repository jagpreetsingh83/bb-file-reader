export const enum AppRoutes {
  ANY = '**',
  ERROR = 'error',
  FILE_IMPORT = 'file-import'
}

export interface Adapter<T> {
  adapt(item: any): T;
}
