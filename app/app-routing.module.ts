import { NgModule } from '@angular/core';
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";


const appRoutes: Routes = [
    { path: '', redirectTo: '/feature-one', pathMatch: 'full' },
    { path: 'feature-one', loadChildren: './features/feature-one/feature-one.module#FeatureOneModule' },
    { path: 'feature-two', loadChildren: './features/feature-two/feature-two.module#FeatureTwoModule' }
];

@NgModule({
    imports: [ NativeScriptRouterModule.forRoot(appRoutes) ],
    exports: [ NativeScriptRouterModule ]
})
export class AppRoutingModule {

}