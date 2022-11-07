import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharacterResponse} from "../interfaces/character.response";
import {urls} from "../urls/urls";
import {ICharacter} from "../interfaces/character.interface";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private clientModule:HttpClient) { }

  getById(id:number[]):Observable<ICharacter>{
    return this.clientModule.get<ICharacter>(`${urls.characters}/${id}`)
  }
}
