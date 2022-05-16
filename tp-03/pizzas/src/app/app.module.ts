import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PizzasComponent } from './pizzas/pizzas.component';
import { PizzaDetailsComponent } from './pizza-details/pizza-details.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzasComponent,
    PizzaDetailsComponent,
    PizzaListComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }