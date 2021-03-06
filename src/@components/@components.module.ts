import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTemplateComponent } from './header-template/header-template.component';
import { FooterTemplateComponent } from './footer-template/footer-template.component';
import { MenuComponent } from './header-template/components/menu/menu.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';
import { DividerComponent } from './divider/divider.component';
import { TabNavigationComponent } from './tab-navigation/tab-navigation.component';

@NgModule({
  declarations: [
    HeaderTemplateComponent,
    FooterTemplateComponent,
    MenuComponent,
    ButtonComponent,
    DividerComponent,
    TabNavigationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderTemplateComponent,
    FooterTemplateComponent,
    ButtonComponent,
    DividerComponent,
    TabNavigationComponent
  ]
})
export class ComponentsModule { }
