import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IEpisode} from "../interfaces/episode.interface";
import {urls} from "../urls/urls";
import {ApyPayload} from "../interfaces/api.interface";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient:HttpClient) { }

  getEpisodes(page=1){
    return this.httpClient.get<ApyPayload<IEpisode>>(urls.episodes,{params:{page}}).pipe(
      map((res)=>res.results)
    )
  }
}
