import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Individual} from "../model/individual";
import {EditService} from "../services/edit.service";
import {TableExpandableRowsExample} from "../table/table.component";
import {DialogComponent} from "../../shared/componentes/dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.scss'
})
export class TarefaComponent implements OnInit{
  data: Individual[] = [];
  private router: Router;
  private route: ActivatedRoute;
  constructor(router: Router, route: ActivatedRoute, private editService: EditService, public dialog: MatDialog,) {
    this.router = router;
    this.route = route;
  }
  ngOnInit() {

  }
  onAdd(){
    this.router.navigate(['create'] ,{relativeTo: this.route});
  }

  onDataLoaded(data: Individual[]){
    this.data = data;
  }

  onEdit(){
    this.editService.changeEditStatus(true);
    this.editService.setEditButtonClicked(true);
    this.dialog.open(DialogComponent, { data: "Clique no elemento que você deseja editar" });
  }
}

