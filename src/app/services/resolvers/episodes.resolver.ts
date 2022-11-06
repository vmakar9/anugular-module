import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ApyPayload} from "../../interfaces/api.interface";
import {IEpisode} from "../../interfaces/episode.interface";
import {EpisodeService} from "../episode.service";

@Injectable({
  providedIn: 'root'
})
export class EpisodesResolver implements Resolve<IEpisode[]> {
  constructor(private episodeService:EpisodeService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEpisode[]> {
    const page = route.queryParams[`page`];
    return this.episodeService.getEpisodes(page)
  }
}
