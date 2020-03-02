import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from './../insert-usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public usuarios:Array <Usuario>;
  public url:string;

  constructor(private http:HttpClient) {
    this.url ="url"
   }
   showUsers():Array <Usuario>{
     
     return this.usuarios
  }
  addUser(user:Usuario){
    this.usuarios.push(user);
  }
}
