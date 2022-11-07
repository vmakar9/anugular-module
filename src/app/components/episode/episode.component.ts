import {Component, Input, OnInit} from '@angular/core';
import {IEpisode} from "../../interfaces/episode.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

  @Input()
  episod:IEpisode

  constructor(private router:Router,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }


}
