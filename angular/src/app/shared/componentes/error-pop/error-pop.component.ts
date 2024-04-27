import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-error-pop',
  templateUrl: './error-pop.component.html',
  styleUrl: './error-pop.component.scss'
})
export class ErrorPopComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {

  }

}
