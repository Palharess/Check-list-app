import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TarefasService} from "../services/tarefas.service";

@Component({
  selector: 'app-tarefas-form',
  templateUrl: './tarefas-form.component.html',
  styleUrl: './tarefas-form.component.scss'
})
export class TarefasFormComponent {

  formu: FormGroup;

  constructor(private formBuilder: FormBuilder, private tarefasService: TarefasService) {
    this.formu = formBuilder.group(
      {
        titulo: [''],
        description: [''],
        data: [''],
        tempo: ['']
      }
    );
  }
  onCriar(){
    console.log(this.formu.value);
}
  onVoltar(){
    console.log(this.formu.value);
  }

}
