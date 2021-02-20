import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../shared/service/pokemon/pokemon.service';
import { Pokemon } from '../../shared/models/pokemon';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemonsList: [];
  selectedPokemon: Pokemon;
  pageSlice: never[];
  dataSource: MatTableDataSource<[]>;
  displayedColumns: string[] = ['Name'];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons().subscribe(pokemons => {
      this.pokemonsList = pokemons;
      this.pageSlice = this.pokemonsList.slice(0, 5);
      this.dataSource = new MatTableDataSource(this.pokemonsList);
    });
  }

  getPokemonById(id:number){
    this.pokemonService.getPokemonById(id).subscribe(pokemon=> this.selectedPokemon = pokemon);
  }

  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > event.length){
      endIndex = this.pokemonsList.length;
    }
    this.pageSlice = this.pokemonsList.slice(startIndex, endIndex);
  }

}
