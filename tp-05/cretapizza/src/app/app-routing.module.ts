import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaFormComponent } from './components/pizzas/pizza-form/pizza-form.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';

const routes: Routes = [
  {
    path: 'pizzas',
    children: [
      { path: '', component: PizzasComponent },
      { path: 'new', component: PizzaFormComponent },
    ]
  },
  { path: '', redirectTo: 'pizzas', pathMatch: 'full' },
  { path: '**', redirectTo: 'pizzas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }