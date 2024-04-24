import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TarefaComponent} from "./tarefa/tarefa.component";

const routes: Routes = [
  {path: 'tarefas', component:TarefaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }
