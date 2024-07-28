import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <input [(ngModel)]="name"/>
    {{calculateNumber()}}
  `,
  imports: [CommonModule, FormsModule],
})
export class App {
  name = 'Angular';
  calculateNumber() {
    console.log('Do some heavy tasks');
    return Math.random();
  }
}

bootstrapApplication(App);
