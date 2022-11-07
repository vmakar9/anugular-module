import { Component, OnInit } from '@angular/core';
import {ICharacter} from "../../interfaces/character.interface";
import {CharacterService} from "../../services/character.service";
import {CharacterResponse} from "../../interfaces/character.response";

@Component({
  selector: 'app-episode-characters',
  templateUrl: './episode-characters.component.html',
  styleUrls: ['./episode-characters.component.css']
})
export class EpisodeCharactersComponent implements OnInit {

  url:string
  character:CharacterResponse
  id:number;


  constructor(private characterService:CharacterService) { }

  ngOnInit(): void {

  }



}
