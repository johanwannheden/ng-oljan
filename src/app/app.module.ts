import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {AppComponent} from './app.component';
import {OljanComponent} from './oljan/oljan.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OljanComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
