import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {Usuario} from './../insert-usuario/usuario';


@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css'],
  providers:[UserService]

})
export class ShowUserComponent implements OnInit {
  public usuarios:Array<Usuario>;


  constructor(    public _userService:UserService
    ) { this.usuarios = _userService.showUsers() }

  ngOnInit() {
  }

}
