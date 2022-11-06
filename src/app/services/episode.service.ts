import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

import {EpisodeResponse} from "../interfaces/episode.response";
import {urls} from "../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) {
  }

  getEpisodes(page = 1, term = ""): Observable<EpisodeResponse> {
    return this.httpClient.get<EpisodeResponse>(`${urls.episodes}/?page=${page}${(term === "")?"":"&name"+term}`)
  }


}
