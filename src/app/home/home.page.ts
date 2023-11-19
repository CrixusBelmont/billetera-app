import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  features: any[] = [
    {id: 1, name: 'Cuenta Navideña - 12345',src: 'assets/icons/top-up.png', background: 'rgba(27,150,181, 0.1)', page: ''},
    {id: 4, name: 'Cuenta de Ahorro - 98765', src: 'assets/icons/debit-card.png', background: 'rgba(27,150,181, 0.1)', page: ''},
  ];

  transactions: any[] = [
    {id: 1, vendor: 'Paypal', image: '', amount: 1500, time: '3:00PM'},
    {id: 2, vendor: 'Transferencia de Cuenta de Ahorro a Cuenta navideña', image: '', amount: -1200, time: '4:00PM'}
  ];

  constructor() {}

}
