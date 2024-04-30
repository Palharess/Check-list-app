import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Individual} from "../model/individual";


@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.scss'
})
export class TarefaComponent implements OnInit{
  data: Individual[] = [];
  show = false;
  private router: Router;
  private route: ActivatedRoute;
  constructor(router: Router, route: ActivatedRoute) {
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
    prompt
  }
}

