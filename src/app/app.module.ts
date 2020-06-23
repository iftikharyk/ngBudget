import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AdditemComponent } from './additem/additem.component';
import { BudgetListComponent } from './budget-list/budget-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AdditemComponent,
    BudgetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
