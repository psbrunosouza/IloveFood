import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTemplateComponent } from './header-template/header-template.component';
import { FooterTemplateComponent } from './footer-template/footer-template.component';
import { MenuComponent } from './header-template/components/menu/menu.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    HeaderTemplateComponent,
    FooterTemplateComponent,
    MenuComponent,
    ButtonComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderTemplateComponent,
    FooterTemplateComponent,
    ButtonComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
