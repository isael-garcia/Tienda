import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { global } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url;

  constructor(private _http: HttpClient,) {
    
    this.url = global.URL
   }

   listar_clientes_filtro_admin():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json ')
    return this._http.get(this.url+'listar_clientes_filtro_admin', {headers:headers})
  }
}
