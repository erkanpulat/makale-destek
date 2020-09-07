import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TranslationPageComponent } from './components/translation-page/translation-page.component';
import { GraphicPageComponent } from './components/graphic-page/graphic-page.component';
import { StatisticsPageComponent } from './components/statistics-page/statistics-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TranslationPageComponent,
    GraphicPageComponent,
    StatisticsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
