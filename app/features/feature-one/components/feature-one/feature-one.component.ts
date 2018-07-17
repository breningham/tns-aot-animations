import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, transition, stagger, style, state, animate } from "@angular/animations";

enum animateBallState {
  stationary = 'stationary',
  up = 'up',
  down = 'down',
  left = 'left',
  right = 'right'
}

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.css'],
  moduleId: module.id,
  animations: [
    trigger('animateBallState', [
      state(animateBallState.stationary, style({ transform: 'translateX(0) translateY(0)' })),
      state(animateBallState.up, style({ transform: 'translateY(-100)' })),
      state(animateBallState.down, style({ transform: 'translateY(100)' })),
      state(animateBallState.left, style({ transform: 'translateX(-100)' })),
      state(animateBallState.right, style({ transform: 'translateX(100)' })),
      transition(`${animateBallState.stationary} => *`, animate(500)),
      transition(`${animateBallState.up} => *`, animate(500)),
      transition(`${animateBallState.down} => *`, animate(500)),
      transition(`${animateBallState.left} => *`, animate(500)),
      transition(`${animateBallState.right} => *`, animate(500)),
    ])
  ]
})
export class FeatureOneComponent implements OnInit, AfterViewInit {

  states = [ animateBallState.stationary, animateBallState.down, animateBallState.left, animateBallState.right, animateBallState.up ];

  currentAnimationState = animateBallState.stationary;

  animationChooser: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.animationChooser = setInterval(() => this.randomizeAnimation(), 550);
  }

  randomizeAnimation() {
    var item = this.states[Math.floor(Math.random()*this.states.length)];
    this.currentAnimationState = item;
  }

}
