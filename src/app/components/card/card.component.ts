import { Component, Input, OnInit } from '@angular/core';
import { ApipokemonService } from 'src/app/utility/service/apipokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() informacion:any
  public img = ''
  constructor(private apipokemonService:ApipokemonService) { }

  ngOnInit(): void {
    this.apipokemonService.getQueryPokemon(this.informacion.url)
        .subscribe((response:any)=>{
            // console.log(response);
            this.img = response.sprites.front_default;
            console.log(this.img);
        })
  }

}
