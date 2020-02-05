import { NgModule, Optional, SkipSelf } from '@angular/core';
import { environment } from '@env/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoggerModule } from 'ngx-logger';

import { ErrorHandlerModule } from './error-handler/error-handler.module';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    LoggerModule.forRoot(environment.logging),
    ErrorHandlerModule.forRoot(),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    })
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
