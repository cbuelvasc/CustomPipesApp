import { Component } from '@angular/core';

import { Color, Heroe } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: [],
})
export class OrderComponent {
  isUppercase: boolean = false;
  orderBy: string = '';
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.BLUE,
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.BLACK,
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.GREEN,
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.RED,
    },
    {
      name: 'Superwoman',
      fly: true,
      color: Color.BLUE,
    },
  ];

  constructor() {}

  changeWord() {
    this.isUppercase = !this.isUppercase;
  }

  changeSort(value: string) {
    this.orderBy = value;
  }
}
