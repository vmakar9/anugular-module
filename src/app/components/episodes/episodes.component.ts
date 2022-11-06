import { Component, OnInit} from '@angular/core';
import {EpisodeService} from "../../services/episode.service";
import {IEpisode} from "../../interfaces/episode.interface";
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {EpisodeResponse} from "../../interfaces/episode.response";


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  episodes:EpisodeResponse
  pages:number[]
  currentpage=1
  searchTerm=""

  constructor(private activatedRoute: ActivatedRoute,private episodeService:EpisodeService) {
  }

  ngOnInit(): void {
   this.activatedRoute.queryParams.subscribe(params=>{
    this.getEpisodes(this.currentpage)
   })
  }

  getEpisodes(page=1):void{
    this.episodeService.getEpisodes(page,this.searchTerm).subscribe(episodes=>{
      this.episodes = episodes
      this.fillInPageArray(episodes.info.pages)
      this.currentpage = page
    })
  }
  fillInPageArray(total: number): void {
    this.pages = [] as number[];

    for(let counter:number = 1; counter<=total; counter++) {
      this.pages.push(counter);
    }
  }
}


