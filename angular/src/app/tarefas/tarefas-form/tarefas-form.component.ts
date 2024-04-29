import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TarefasService} from "../services/tarefas.service";
import {first} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-tarefas-form',
  templateUrl: './tarefas-form.component.html',
  styleUrl: './tarefas-form.component.scss'
})
export class TarefasFormComponent {

  formu: FormGroup;

  constructor(private formBuilder: FormBuilder, private tarefasService: TarefasService, private snackbar: MatSnackBar) {
    this.formu = formBuilder.group(
      {
        titulo: ['', Validators.required],
        description: ['', Validators.required],
        data: ['',Validators.required],
        tempo: ['',Validators.required]
      }
    );
  }
  onCriar() {
    this.tarefasService.persist(this.formu.value).subscribe(
      result => console.log(result),
      error => {
        this.snackbar.open('Error: ' + error.error.message, 'Close', {
          duration: 3000,
        });
      }
    )
  }

  onVoltar(){
    console.log(this.formu.value);
  }

}
