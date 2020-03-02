import { Component, OnInit } from '@angular/core';
import {Usuario} from './../insert-usuario/usuario';
import {UserService} from './../service/user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
  providers:[UserService]
})
export class DeleteUserComponent implements OnInit {
  public usuarios: Array<Usuario>;
  public clientes$: Observable<Usuario[]>;
  constructor(
    public _userService:UserService

  ) {
    
   }

  ngOnInit() {
    this.clientes$ =this._userService.obtener(),
    this.clientes$.subscribe(clientes => this.usuarios = clientes)
  }
  DeleteUser(user:Usuario){
    this._userService.deleteUser(user).subscribe();
    this.clientes$.subscribe(clientes => this.usuarios = clientes)
    
  }
}
