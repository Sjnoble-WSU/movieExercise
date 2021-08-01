import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeywordinputComponent } from './home/keywordinput';
import { InfoPageComponent } from './info/info-page/info-page.component';

const routes: Routes = [
  {path: '', component: KeywordinputComponent},
  {path: 'info', component: InfoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
