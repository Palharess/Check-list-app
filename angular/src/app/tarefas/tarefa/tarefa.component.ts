import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.scss'
})
export class TarefaComponent implements OnInit{

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

  onEdit(){

  }
}

