import { Component } from '@angular/core';

export enum Category {
  CREAM,
  TOMATO,
}

export interface Pizzas {
  type: Category,
  name: string,
  current?: boolean,
}

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent {
  pizzas: Pizzas[] = [
    { type: Category.CREAM, name: 'Savoyarde' },
    { type: Category.TOMATO, name: 'Margaritta' },
    { type: Category.TOMATO, name: 'Campagnarde' },
    { type: Category.CREAM, name: '4 fromages' },
    { type: Category.TOMATO, name: 'Mexicaine' },
  ];
  selected!: Pizzas;
}