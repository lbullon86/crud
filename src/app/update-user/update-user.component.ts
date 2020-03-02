import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Usuario} from '../insert-usuario/usuario';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  providers: [UserService]
})
export class UpdateUserComponent implements OnInit {
  public bool:boolean=false;
  public usuarios: Array<Usuario>;
  public user:Usuario;
  public clientes$: Observable<Usuario[]>;

  constructor(public _userService:UserService) 
  { }

  ngOnInit() {
    this.clientes$ =this._userService.obtener(),
    this.clientes$.subscribe(clientes => this.usuarios = clientes)
  }
  updatear(usuario:Usuario){
    this.bool = true;
    this.user = usuario;
  }
  UpdateUser(){
    this._userService.updateUser(this.user).subscribe();
    this.clientes$.subscribe(clientes => this.usuarios = clientes);
    this.bool = false;



  }
}
