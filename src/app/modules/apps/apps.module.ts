import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';

@NgModule({
 declarations: [
  HeaderComponent,
  FooterComponent,
  MainComponent
 ],
 exports: [
  MainComponent,
  HeaderComponent,
  FooterComponent
 ],
 imports: [
  CommonModule
 ]
})
export class AppsModule { }
