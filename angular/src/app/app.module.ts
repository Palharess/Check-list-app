import { HttpClientModule } from  '@angular/common/http';
import { provideHttpClient, withFetch} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {TarefasModule} from "./tarefas/tarefas.module";
import {TarefasService} from "./tarefas/services/tarefas.service";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    TarefasModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    TarefasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
