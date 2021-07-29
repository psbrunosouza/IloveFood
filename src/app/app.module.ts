import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '@components/@components.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
