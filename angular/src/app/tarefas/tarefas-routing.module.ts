import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TarefaComponent} from "./tarefa/tarefa.component";
import {TarefasFormComponent} from "./tarefas-form/tarefas-form.component";

const routes: Routes = [
  {path: '', component:TarefaComponent},
  {path: 'create', component:TarefasFormComponent},
  {path: 'edit', component:TarefasFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }
