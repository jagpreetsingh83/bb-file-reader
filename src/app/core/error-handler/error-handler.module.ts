import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ErrorComponent } from './components/error/error.component';
import { ErrorHandlerRoutingModule } from './error-handler-routing.module';
import { ErrorHandlerService } from './services/error-handler.service';

@NgModule({
  declarations: [ErrorComponent],
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
