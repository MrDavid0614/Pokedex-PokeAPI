import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { GET_POKEMONS, GET_POKEMON_BY_ID } from '../../constants/query';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  loading: boolean;
  pokemons: Observable<any>;

  constructor(private apollo: Apollo) { }

  getPokemons() {
    
    this.pokemons = this.apollo
    .watchQuery({
      query: GET_POKEMONS,
    })
    .valueChanges.pipe(
      map((result: any) => {
        const pokemons = result.data.pokemons.map(pokemon => {
          const pokemonObject = JSON.parse(pokemon);
          this.addIdToPokemonObject(pokemonObject);
          return pokemonObject;
        });
        return pokemons;
      })
    );

    return this.pokemons;
  }

  getPokemonById(id: number) {
    return this.apollo
      .watchQuery({
        query: GET_POKEMON_BY_ID,
        variables: {
          id
        }
      })
      .valueChanges.pipe(
        map((result: any) => {
          return result.data.pokemon;
        })
      );
  }

  addIdToPokemonObject(pokemonObject):void {
      const matches: RegExp = pokemonObject.url.match(/([/]\d+)/)
      const id: number = +matches[0].slice(1);
      pokemonObject.id = id;
  }

}
