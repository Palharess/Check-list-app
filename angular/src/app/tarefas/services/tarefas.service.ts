import { Injectable } from '@angular/core';
import {Individual} from "../model/individual";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor( httpCliente:HttpClient) { }
  list(): Individual[]{
    return [
      {
        _id: 1,
        titulo: 'Hydrogen',
        tempo: "tenpo",
        data: 'H',
        desc: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
      },
      {
        _id: 1,
        titulo: 'Hydrogen',
        tempo: "tenpo",
        data: 'H',
        desc: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
      }
    ];
  }
}
