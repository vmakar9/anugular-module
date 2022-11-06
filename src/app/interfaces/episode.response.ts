import {Pagininfo} from "./pagininfo";
import {IEpisode} from "./episode.interface";

export interface EpisodeResponse{
  info:Pagininfo
  results:IEpisode[]
}
