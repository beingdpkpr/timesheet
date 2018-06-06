import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AppsModule } from './modules/apps/apps.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { MainComponent } from './modules/apps/component/main/main.component';

@NgModule({
 declarations: [
  AppComponent
 ],
 imports: [
  AppsModule,
  AuthenticationModule,
  BrowserModule,
  ClarityModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
