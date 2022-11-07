import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharacterResponse} from "../interfaces/character.response";
import {urls} from "../urls/urls";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private clientModule:HttpClient) { }

  getById(id:number):Observable<CharacterResponse>{
    return this.clientModule.get<CharacterResponse>(`${urls.characters}/${id}`)
  }
}
