import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataItemsService } from './data-items.service';
import { AppComponent } from './app.component';
import { InputElementsComponent } from './input-elements/input-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    InputElementsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataItemsService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
