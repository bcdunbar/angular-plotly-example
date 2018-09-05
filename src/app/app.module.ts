import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PlotlyModule } from 'angular-plotly.js';

import { PlotlyExampleComponent } from './app.component';

@NgModule({
  declarations: [
    PlotlyExampleComponent
  ],
  imports: [
    BrowserModule,
    PlotlyModule
  ],
  providers: [],
  bootstrap: [PlotlyExampleComponent]
})
export class AppModule { }
