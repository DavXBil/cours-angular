import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/shared/models/pizza';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent implements OnInit {

  categories = [
    Category.TOMATO,
    Category.CREAM,
    Category.SWEET,
    Category.SPECIAL,
  ];

  formCreatePizza = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    category: new FormControl(Category.TOMATO, Validators.required),
    price: new FormControl('', Validators.required),
    ingredients: new FormArray([
      new FormControl('', Validators.required),
    ]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formCreatePizza.valid);
  }

}