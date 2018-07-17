import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { FeatureOneComponent } from './components/feature-one/feature-one.component';

const routes: Routes = [
  { path: '', component: FeatureOneComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class FeatureOneRoutingModule { }
