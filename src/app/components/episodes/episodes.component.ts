import { Component, OnInit } from '@angular/core';
import {EpisodeService} from "../../services/episode.service";
import {IEpisode} from "../../interfaces/episode.interface";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  episodes:IEpisode[]

  constructor(private episodeService:EpisodeService) { }

  ngOnInit(): void {
    this.episodeService.getEpisodes().subscribe((data)=>this.episodes=data)
  }

}
