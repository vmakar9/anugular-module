import { Component, OnInit } from '@angular/core';
import {EpisodeService} from "../../services/episode.service";
import {IEpisode} from "../../interfaces/episode.interface";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs";
import {ApyPayload} from "../../interfaces/api.interface";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  episodes: IEpisode[]
  count:number
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      map(value => value['results'] as ApyPayload<IEpisode>)
    ).subscribe((value) =>{
      this.count = value.info.count
      this.episodes = value.results
    })
  }
}


