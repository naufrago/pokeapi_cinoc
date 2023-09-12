import { Component, OnInit } from '@angular/core';
import { ApipokemonService } from 'src/app/utility/service/apipokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pokemones:Array<any> = []
  constructor(private apipokemonService:ApipokemonService) { }

  ngOnInit(): void {
    this.apipokemonService.getQuery('')
      .subscribe((response:any)=>{
        this.pokemones = response.results
        console.log(response.results);
      })

  }

}
