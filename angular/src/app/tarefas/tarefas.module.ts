import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefaComponent } from './tarefa/tarefa.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatTableModule} from '@angular/material/table';
import {MatIcon} from "@angular/material/icon";
import {TableExpandableRowsExample} from "./table/table.component";
import {MatCardModule} from '@angular/material/card';
import {SharedModule} from "../shared/shared.module";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import { TarefasFormComponent } from './tarefas-form/tarefas-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";


@NgModule({
  declarations: [
    TarefaComponent,
    TarefasFormComponent,
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
    TableExpandableRowsExample,
    MatCardModule,
    SharedModule,
    MatMiniFabButton,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatButton,
  ]
})
export class TarefasModule { }
