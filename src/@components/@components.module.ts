import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTemplateComponent } from './header-template/header-template.component';
import { FooterTemplateComponent } from './footer-template/footer-template.component';
import { MenuComponent } from './header-template/components/menu/menu.component';



@NgModule({
  declarations: [
    HeaderTemplateComponent,
    FooterTemplateComponent,
    MenuComponent
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
