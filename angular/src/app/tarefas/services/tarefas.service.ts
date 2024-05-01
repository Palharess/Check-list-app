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
    );
  }
  persist(tarefa: Individual){
    return this.httpCliente.post<Individual>(this.API_URL, tarefa)
  }
  edit(tarefa: Individual){
    console.log(tarefa.data);
    return this.httpCliente.put<Individual>(`${this.API_URL}/${tarefa._id}`, tarefa)
  }
}
