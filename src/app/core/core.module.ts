import { NgModule, Optional, SkipSelf } from '@angular/core';
import { environment } from '@env/environment';
import { LoggerModule } from 'ngx-logger';

import { ErrorHandlerModule } from './error-handler/error-handler.module';

@NgModule({
  imports: [
    LoggerModule.forRoot(environment.logging),
    ErrorHandlerModule.forRoot()
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core module in the AppModule only.`
      );
    }
  }
}
