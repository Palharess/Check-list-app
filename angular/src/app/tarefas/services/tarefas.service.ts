import { Injectable } from '@angular/core';
import {Individual} from "../model/individual";
import {HttpClient} from "@angular/common/http";
import {delay, first, Observable, take, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TarefasService {
  private API_URL = 'api/tarefas';
  constructor( private httpCliente:HttpClient) { }
  list(): Observable<Individual[]>{
    return this.httpCliente.get<Individual[]>(this.API_URL).pipe(
      first(),

      tap(tarefas => console.log(tarefas))
    );
  }
}
