import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpeechModule } from 'ngx-speech';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaclComponent } from './cacl/cacl.component';
import { PizzaComponent } from './pizza/pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    CaclComponent,
    PizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SpeechModule
  ],
  providers: [ { provide: 'SPEECH_LANG', useValue: 'en-US' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
