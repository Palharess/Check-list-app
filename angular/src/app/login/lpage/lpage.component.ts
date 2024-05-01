import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lpage',
  templateUrl: './lpage.component.html',
  styleUrls: ['./lpage.component.scss']
})
export class LpageComponent {
  title = 'Login Page';
  email = new FormControl('');
  password = new FormControl('');

  constructor() {

  }

  onSubmit() {

  }
}
