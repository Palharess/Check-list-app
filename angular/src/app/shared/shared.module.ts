import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPopComponent } from './componentes/error-pop/error-pop.component';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";



@NgModule({
  declarations: [
    ErrorPopComponent
  ],
  imports: [
    CommonModule,
    MatDialogContent,
    MatButton,
    MatDialogClose,
    MatDialogTitle,
    MatDialogActions
  ],
  exports: [ErrorPopComponent]
})

export class SharedModule { }
