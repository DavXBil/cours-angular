import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from 'src/app/shared/models/pizza';

@Component({
  selector: 'app-pizzas-list',
  templateUrl: './pizzas-list.component.html',
  styleUrls: ['./pizzas-list.component.scss']
})
export class PizzasListComponent {
  @Input() pizzas: Pizza[]|null = null;
  @Output('selectPizza') emitter = new EventEmitter<number>();
  selected?: Pizza;

  selectPizza(index: number) {
    this.emitter.emit(index);
    if (this.pizzas) this.selected = this.pizzas[index];
  }
}