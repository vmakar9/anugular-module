import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {EpisodesComponent} from "./components/episodes/episodes.component";
import {EpisodesResolver} from "./services/resolvers/episodes.resolver";

const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
      {path:'',redirectTo:'episode',pathMatch:'full'},
      {path:'episode',runGuardsAndResolvers:'pathParamsOrQueryParamsChange',resolve:{results:EpisodesResolver},component:EpisodesComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
