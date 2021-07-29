import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '@components/@components.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentsModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
