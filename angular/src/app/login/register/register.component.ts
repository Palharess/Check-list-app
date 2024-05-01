import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  title = 'Register Page';
  email = new FormControl('');
  password = new FormControl('');

  constructor() {

  }

  onSubmit() {

  }
}
