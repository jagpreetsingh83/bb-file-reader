import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorHandlerRoutingModule } from './error-handler-routing.module';
import { ErrorHandlerService } from './services/error-handler.service';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [SharedModule, ErrorHandlerRoutingModule]
})
export class ErrorHandlerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ErrorHandlerModule,
      providers: [{ provide: ErrorHandler, useClass: ErrorHandlerService }]
    };
  }
}
