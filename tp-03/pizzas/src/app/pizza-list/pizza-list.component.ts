import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizzas } from '../pizzas/pizzas.component';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent {
  @Input()
  pizzas!: Pizzas[];

  @Output('selectOne')
  pizzaEmitter = new EventEmitter<Pizzas>();

  onSelect(selected: Pizzas) {
    this.pizzas.forEach(p => p.current = false);
    selected.current = true;
    this.pizzaEmitter.emit(selected);
  }
}