import { Component, OnInit } from '@angular/core';
import { UserService} from '../service/user.service';
import {Usuario} from './usuario';

@Component({
  selector: 'app-insert-usuario',
  templateUrl: './insert-usuario.component.html',
  styleUrls: ['./insert-usuario.component.css'],
  providers:[UserService]
})
export class InsertUsuarioComponent implements OnInit {
  public titulo:string;
  public usuarios:Array<Usuario>;
  public user:Usuario;

  constructor(
    public _userService:UserService,

  ) {this.user= new Usuario("",0,"","","")}

  ngOnInit() {
  }

  ngAddUser(){
    this._userService.addUser(this.user)
  }

}
