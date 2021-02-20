import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  pokemons: [];
  displayedColumns: string[] = ['Name'];
  dataSource: MatTableDataSource<[]>;
  pageSlice;
  constructor() { }

  applyFilter(filterValue:string):void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
