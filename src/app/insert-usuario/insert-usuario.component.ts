import { Component, OnInit } from '@angular/core';
import { UserService} from '../service/user.service';
import {Usuario} from './usuario';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-insert-usuario',
  templateUrl: './insert-usuario.component.html',
  styleUrls: ['./insert-usuario.component.css'],
  providers:[UserService]
})
export class InsertUsuarioComponent implements OnInit {
  public titulo:string;
  public user:Usuario;
  public clientes$: Observable<Usuario[]>;
  public usuarios:Array<Usuario>;


  constructor(
    public _userService:UserService,

  ) {this.user= new Usuario()}

  ngOnInit() {
    
  }

  ngAddUser(){
    
    this._userService.addUser(this.user).subscribe(user => console.log(user));
    alert("el Usuario ha sido añadido");

  }

}
