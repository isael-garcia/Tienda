import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { global } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public url;

  constructor(private _http: HttpClient,) {
    
    this.url = global.URL
   }
   login_admin(data:any):Observable<any>{
     let headers = new HttpHeaders().set('Content-Type', 'application/json ')
     return this._http.post(this.url+'login_admin', data, {headers:headers})
   }

   getToken(){
     return localStorage.getItem('token')
   }

   public isAuthenticated(allowRoles : string[]):boolean{
 
    const token = localStorage.getItem('token');
 
    if(!token){
      return false;
    }
    
    try {
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(<any>token);      
      console.log(token);
      if(!decodedToken){
        console.log('No es valido');
        localStorage.removeItem('token');
        return false;
      }
    } catch (error) {
      localStorage.removeItem('token');
      return false;
    }
 
    return allowRoles.includes(decodedToken['role']);
  }
}
