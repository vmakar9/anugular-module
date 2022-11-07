import {Pagininfo} from "./pagininfo";
import {ICharacter} from "./character.interface";

export interface CharacterResponse{
  info:Pagininfo,
  results:ICharacter[]
}
