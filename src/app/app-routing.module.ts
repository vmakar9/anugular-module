import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {EpisodesComponent} from "./components/episodes/episodes.component";
import {EpisodeCharactersComponent} from "./components/episode-characters/episode-characters.component";


const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
      {path:'',redirectTo:'episode',pathMatch:'full'},
      {path:'episode',component:EpisodesComponent},
      {path:'episode/:id',component:EpisodeCharactersComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
