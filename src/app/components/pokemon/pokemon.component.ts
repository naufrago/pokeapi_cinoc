import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApipokemonService } from 'src/app/utility/service/apipokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  public nombrePokemon=''
  constructor(private activatedRoute: ActivatedRoute,
              private router:Router,
              private apipokemonService:ApipokemonService
              ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params:any)=>{
        this.nombrePokemon=params.nombre;
        console.log(this.nombrePokemon);
        this.informacionPokemon(this.nombrePokemon);
      })
  }

  informacionPokemon(nombre:string){
    this.apipokemonService.getQuery(nombre)
        .subscribe((response:any)=>{
          console.log(response);
        }, err=>{
          this.router.navigate(['/']);
        })

  }

}
