import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApipokemonService {
  private url = environment.api;

  constructor(private http:HttpClient) { }

    // hace el consumo a la api
    getQuery(query: string) {
      const ruta = this.url+query;
      return this.http.get(ruta);
    }

    getQueryPokemon(url:string){
      return this.http.get(url);
    }
}
