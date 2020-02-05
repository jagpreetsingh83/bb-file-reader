import { NgModule, Optional, SkipSelf } from '@angular/core';
import { environment } from '@env/environment';
import { LoggerModule } from 'ngx-logger';
import { NotFoundComponent } from './error-handler/components/not-found/not-found.component';

@NgModule({
  imports: [LoggerModule.forRoot(environment.logging)],
  declarations: [NotFoundComponent]
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
