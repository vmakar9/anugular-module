import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {EpisodeService} from "../../services/episode.service";
import {IEpisode} from "../../interfaces/episode.interface";
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {map} from "rxjs";
import {ApyPayload} from "../../interfaces/api.interface";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit, AfterViewInit {

  episodes: IEpisode[]
  count:number

  @ViewChild(MatPaginator)
  paginator:MatPaginator
  constructor(private activatedRoute: ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      map(value => value['results'] as ApyPayload<IEpisode>)
    ).subscribe((value) =>{
      this.count = value.info.pages
      this.episodes = value.results
    })
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe((page)=>{
       this.router.navigate([],{queryParams:{page:page.pageIndex+1}})
    })
  }
}


