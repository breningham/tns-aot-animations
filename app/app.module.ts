import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CoreModule } from "~/core/core.module";
import { SharedModule } from "~/shared/shared.module";

import { AppComponent } from '~/app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
      AppComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}

