import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LpageComponent } from './lpage/lpage.component';
import {MatCard} from "@angular/material/card";
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    LpageComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatCard,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIcon,
        MatDivider,
        MatButtonModule
    ]
})
export class LoginModule { }
