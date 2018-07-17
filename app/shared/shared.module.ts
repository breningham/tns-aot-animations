import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

const SharedModules = [ 
  NativeScriptCommonModule, 
  NativeScriptRouterModule, 
  NativeScriptFormsModule, 
  ReactiveFormsModule 
];

@NgModule({
  imports: [ ...SharedModules ],
  exports: [ ...SharedModules ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
