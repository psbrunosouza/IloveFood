import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: HomeComponent},
  {path: 'about', component: HomeComponent}
];

@NgModule({
  declarations: [],
  imports: [ HomeModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
