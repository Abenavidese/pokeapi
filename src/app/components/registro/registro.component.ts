import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  constructor(private route: ActivatedRoute) { }

ngOnInit() {
  // Obtener los datos de la ruta
  const pokemonData = history.state.data;
  console.log(pokemonData);
  // Aquí puedes realizar el registro utilizando los datos recibidos
  // Por ejemplo, puedes enviar los datos a Firebase para guardarlos
}

}
