import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TarefasService} from "../services/tarefas.service";
import {first} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, Router} from "@angular/router";
import {EditService} from "../services/edit.service";
import {Individual} from "../model/individual";

@Component({
  selector: 'app-tarefas-form',
  templateUrl: './tarefas-form.component.html',
  styleUrl: './tarefas-form.component.scss'
})
export class TarefasFormComponent {
  edit: boolean = false;
  formu: FormGroup;
  router : Router

  constructor(private formBuilder: FormBuilder, private tarefasService: TarefasService, private snackbar: MatSnackBar, private editService: EditService
    , router: Router,  private route: ActivatedRoute) {
    this.formu = formBuilder.group(
      {
        titulo: ['', Validators.required],
        description: ['', Validators.required],
        data: ['',Validators.required],
        tempo: ['',Validators.required]
      }
    );
    this.router = router;
    editService.currentEditStatus.subscribe(editStatus => this.edit = editStatus);

    this.route.paramMap.subscribe(params => {
      let navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras.state) {
        let state = navigation.extras.state as {data: Individual};
        this.formu.setValue({
          titulo: state.data.titulo,
          description: state.data.description,
          data: state.data.data,
          tempo: state.data.tempo
        });
      }
    });
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
    this.editService.changeEditStatus(false);
    this.router.navigate(['/tarefas'])
  }

}
