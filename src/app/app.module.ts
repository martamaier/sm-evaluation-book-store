import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BookSearchComponent } from './book-search/book-search.component';
import {MdbFormsModule} from "mdb-angular-ui-kit/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BookSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
