import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTemplateComponent } from './header-template/header-template.component';
import { FooterTemplateComponent } from './footer-template/footer-template.component';



@NgModule({
  declarations: [
    HeaderTemplateComponent,
    FooterTemplateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderTemplateComponent,
    FooterTemplateComponent
  ]
})
export class ComponentsModule { }
