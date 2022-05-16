import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { PizzaDetailsComponent } from './components/pizzas/pizza-details/pizza-details.component';
import { PizzaFormComponent } from './components/pizzas/pizza-form/pizza-form.component';
import { PizzasListComponent } from './components/pizzas/pizzas-list/pizzas-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { PizzasDirective } from './shared/directives/pizzas.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PizzasComponent,
    PizzaDetailsComponent,
    PizzaFormComponent,
    PizzasListComponent,
    UserFormComponent,
    PizzasDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
