import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  // @Input() pizza?: string;
  // ordered = false;

  constructor() { }

  ngOnInit(): void {
  }
//   order() {
//     console.log('ORDER', this);
//     this.ordered = true;
// }
}
