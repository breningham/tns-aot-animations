import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FeatureOneRoutingModule } from './feature-one-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { FeatureOneComponent } from './components/feature-one/feature-one.component';

import { SharedModule } from "~/shared/shared.module";

@NgModule({
  imports: [
    FeatureOneRoutingModule,
    SharedModule
  ],
  declarations: [FeatureOneComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FeatureOneModule { }
