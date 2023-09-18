import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [{
 path:'',
 component:HomePageComponent
}];

const extraOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
}
@NgModule({
  imports: [RouterModule.forRoot(routes,extraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
