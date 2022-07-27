import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: [],
})
export class BasicsComponent {
  nameLower: string = 'john';
  lastnameUpper: string = 'DOE';
  fullName: string = 'joHN dOE';
  date: Date = new Date();
  constructor() {}
}
