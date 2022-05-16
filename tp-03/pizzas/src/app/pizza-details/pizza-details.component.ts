import { Component, Input } from '@angular/core';
import { Pizzas } from '../pizzas/pizzas.component';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.scss']
})
export class PizzaDetailsComponent {
  @Input() pizza!: Pizzas;
}