import { Component, Input } from '@angular/core';
import { Pizza } from 'src/app/shared/models/pizza';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.scss']
})
export class PizzaDetailsComponent {
  @Input() pizza?: Pizza;
  @Input() thereArePizzas: boolean = false;
}