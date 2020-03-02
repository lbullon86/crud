import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from './../insert-usuario/usuario';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public usuario1 = new Usuario();
  public usuario2 = new Usuario();

  public usuarios:Array <Usuario> = [this.usuario1,this.usuario2];
  public url:string;

  constructor(private http:HttpClient) {
    this.url ="http://localhost:3000/clientes";
   }

   obtener():Observable<any>{
     return this.http.get(this.url);
   }


  addUser(user:Usuario): Observable<any> {
    return this.http.post(this.url,user);
  }

  updateUser(user: Usuario): Observable<any> {
    return this.http.put(`${this.url}/${user.id}`, user);
  }

  deleteUser(user:Usuario):Observable<any>{
    return this.http.delete(`${this.url}/${user.id}`);

  }
}