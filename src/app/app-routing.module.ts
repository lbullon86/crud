import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertUsuarioComponent} from './insert-usuario/insert-usuario.component';
import {DeleteUserComponent} from './delete-user/delete-user.component';
import {ShowUserComponent} from './show-user/show-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';


const routes: Routes = [
  {path: 'insert', component : InsertUsuarioComponent},
  {path: 'delete', component : DeleteUserComponent},
  {path: 'update', component : UpdateUserComponent},
  {path: 'show', component : ShowUserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
