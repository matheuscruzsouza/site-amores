import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FestaDoQueijoComponent } from './components/festa-do-queijo/festa-do-queijo.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'festa-do-queijo',
    component: FestaDoQueijoComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
