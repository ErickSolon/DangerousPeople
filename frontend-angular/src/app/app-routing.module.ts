import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ListaComponent } from './views/lista/lista.component';
import { AddComponent } from './views/add/add.component';
import { UpdateComponent } from './views/update/update.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "lista",
    component: ListaComponent
  },
  {
    path: "add",
    component: AddComponent
  },
  {
    path: "update/:id",
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
