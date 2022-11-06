import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IEpisode} from "../interfaces/episode.interface";
import {urls} from "../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<IEpisode[]>{
    return this.httpClient.get<IEpisode[]>(urls.episodes)
  }
}
