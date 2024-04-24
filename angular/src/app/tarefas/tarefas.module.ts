import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefaComponent } from './tarefa/tarefa.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatTableModule} from '@angular/material/table';
import {MatIcon} from "@angular/material/icon";
import {TableExpandableRowsExample} from "./table/table.component";



@NgModule({
  declarations: [
    TarefaComponent,
  ],
  exports: [
    TarefaComponent
  ],
  imports: [
    CommonModule,
    TarefasRoutingModule,
    MatToolbar,
    MatTableModule,
    MatIcon,
    TableExpandableRowsExample
  ]
})
export class TarefasModule { }
