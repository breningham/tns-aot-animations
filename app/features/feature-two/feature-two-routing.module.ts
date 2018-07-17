import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { FeatureTwoComponent } from './components/feature-two/feature-two.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureTwoComponent
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class FeatureTwoRoutingModule { }
