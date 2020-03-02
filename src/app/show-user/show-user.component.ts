import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Usuario} from './../insert-usuario/usuario';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css'],
  providers:[UserService]

})
export class ShowUserComponent implements OnInit {
  public usuarios:Array<Usuario>;
  public clientes$: Observable<Usuario[]>;

  constructor(    public _userService:UserService
    ) { 
     }

  ngOnInit() {
    this.clientes$ =this._userService.obtener(),
    this.clientes$.subscribe(clientes => this.usuarios = clientes)
  }

}
