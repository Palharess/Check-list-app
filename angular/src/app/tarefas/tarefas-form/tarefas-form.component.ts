import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TarefasService} from "../services/tarefas.service";
import {first} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tarefas-form',
  templateUrl: './tarefas-form.component.html',
  styleUrl: './tarefas-form.component.scss'
})
export class TarefasFormComponent {

  formu: FormGroup;
  router : Router

  constructor(private formBuilder: FormBuilder, private tarefasService: TarefasService, private snackbar: MatSnackBar
    , router: Router) {
    this.formu = formBuilder.group(
      {
        titulo: ['', Validators.required],
        description: ['', Validators.required],
        data: ['',Validators.required],
        tempo: ['',Validators.required]
      }
    );
    this.router = router;
  }
  onCriar() {
    this.tarefasService.persist(this.formu.value).subscribe(
      result =>   {
        this.snackbar.open("Curso salvo!", 'Close', {
          duration: 3000,});
        this.router.navigate(['/tarefas']);
      },
      error => {
        this.snackbar.open('Error: ' + error.error.message, 'Close', {
          duration: 3000,
        });
      }
    )
  }

  onVoltar(){
    this.router.navigate(['/tarefas'])
  }

}
