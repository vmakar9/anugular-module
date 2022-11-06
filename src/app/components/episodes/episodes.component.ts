import { Component, OnInit } from '@angular/core';
import {IEpisode} from "../../interfaces/episode.interface";
import {EpisodeService} from "../../services/episode.service";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  episodes:IEpisode[]


  constructor(private episodeService:EpisodeService) { }

  ngOnInit(): void {
    this.episodeService.getAll().subscribe(value => {
      // @ts-ignore
      this.episodes =value?.results.map((item)=>{
        return item
      })
    })
    console.log(this.episodes)
  }

}
