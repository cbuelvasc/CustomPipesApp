import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styleUrls: [],
})
export class NotCommonsComponent {
  //i18nSelect
  name: string = 'Raquel';
  gendre: string = 'female';

  map = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  //i18nPlurar
  customers: string[] = ['Maria', 'Juan', 'Elizabeth'];
  customerMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  changePerson() {
    this.name = 'Carmelo';
    this.gendre = 'male';
  }

  deleteCustomer() {
    this.customers.pop();
  }

  // KeyValue pipe
  person = {
    name: 'Carmelo',
    age: 39,
    address: 'Medellin, Colombia',
  };

  // Json Pipe
  heroes = [
    {
      name: 'Superman',
      skill: 'Fly',
    },
    {
      name: 'Robin',
      skill: 'Fight',
    },
    {
      name: 'Aquaman',
      skill: 'Water',
    },
  ];

  // Async pipe
  myObservable = interval(5000);
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have data');
    }, 3500);
  });
}
