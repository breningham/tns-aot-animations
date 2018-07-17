import { Component } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  moduleId: module.id,
})
export class AppComponent {

  currentPath = new BehaviorSubject('/');
  currentPath$ = this.currentPath.asObservable();
 

  constructor(private router: RouterExtensions) {

    this.router.router.events.subscribe((routerEvent) => {
      console.log('=================');
      console.log('= Router  Event =');
      console.log('=================');
      console.log(routerEvent);

      this.currentPath.next(this.router.router.url);
    });

  }


}
