import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { getFirestore, collection, addDoc } from "firebase/firestore";

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrl: './poke-table.component.scss'
})
export class PokeTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'image', 'name'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  mensajeAdicional: string = '';



  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;


  pokemons = [];

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    let pokemonData;

    for (let i = 1; i <= 150; i++) {
      this.pokemonService.getPokemons(i).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name
          };

          this.data.push(pokemonData);
          this.dataSource = new MatTableDataSource<any>(this.data);
          this.dataSource.paginator = this.paginator;
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getRow(row: any) {
    const pokemonData = {
      position: row.position,
      image: row.image,
      name: row.name
    };
    this.guardarPokemonEnFirebase(pokemonData);
    this.mensajeAdicional = `Has seleccionado al Pokémon ${row.name} (Posición: ${row.position}).`;
    alert(`Has seleccionado al Pokémon ${row.name} (Posición: ${row.position}).`);
  
    
    
  }

  

guardarPokemonEnFirebase(pokemonData: any) {
  const db = getFirestore();
  // Referencia a la colección de Pokémon en Firebase
  const pokemonCollection = collection(db, 'pokemons');

  // Añadir el nuevo Pokémon a la colección en Firebase
  addDoc(pokemonCollection, pokemonData)
    .then((docRef) => {
      console.log("Pokemon añadido correctamente a Firebase con ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error al añadir el Pokémon a Firebase: ", error);
    });
}


}
