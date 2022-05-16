import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pizza } from 'src/app/shared/models/pizza';
import { PizzaService } from 'src/app/shared/services/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit {

  pizzas$: BehaviorSubject<Pizza[]> = this.pizzaService.pizzas$;
  currentPizza?: Pizza;

  constructor(
    private pizzaService: PizzaService,
  ) {}

  ngOnInit() {
    this.pizzaService.findAll().subscribe();
  }
}