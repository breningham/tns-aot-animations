import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptAnimationsModule } from 'nativescript-angular/animations';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { SharedModule } from "~/shared/shared.module";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptAnimationsModule,
    NativeScriptHttpClientModule,
    SharedModule
  ],
  declarations: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule { }
