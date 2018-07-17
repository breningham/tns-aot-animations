import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FeatureTwoRoutingModule } from './feature-two-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { FeatureTwoComponent } from './components/feature-two/feature-two.component';

@NgModule({
  imports: [
    FeatureTwoRoutingModule,
    NativeScriptCommonModule
  ],
  declarations: [FeatureTwoComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeatureTwoModule { }
