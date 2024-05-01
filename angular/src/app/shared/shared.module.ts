import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPopComponent } from './componentes/error-pop/error-pop.component';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import { DialogComponent } from './componentes/dialog/dialog.component';
import {DeleteDialogComponent} from "./componentes/delete-dialog/delete-dialog.component";




@NgModule({
  declarations: [
    ErrorPopComponent,
    DialogComponent,
    DeleteDialogComponent

  ],
  imports: [
    CommonModule,
    MatDialogContent,
    MatButton,
    MatDialogClose,
    MatDialogTitle,
    MatDialogActions
  ],
  exports: [ErrorPopComponent, DialogComponent, DeleteDialogComponent]
})

export class SharedModule { }
