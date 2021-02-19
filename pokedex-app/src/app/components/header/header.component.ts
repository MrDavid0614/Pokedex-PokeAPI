import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = "Pokémon";
  @Input('data-list') pokemons: string[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
