import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NbPartComponent, PizzaFormComponent } from './components/pizza-form/pizza-form.component';

import { mouseHoverDirective } from './directives/pizza-form/pizza-form.directive';

@NgModule({
  declarations: [
    AppComponent,
    PizzaFormComponent,
    NbPartComponent,
    mouseHoverDirective    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
