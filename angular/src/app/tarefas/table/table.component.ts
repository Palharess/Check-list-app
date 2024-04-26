import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {Individual} from "../model/individual";
import {MatToolbar} from "@angular/material/toolbar";
import {TarefasService} from "../services/tarefas.service";
import {Observable} from "rxjs";



/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-table',
  styleUrl: './table.component.scss',
  templateUrl: './table.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatToolbar],
})
export class TableExpandableRowsExample {
  dataSource:Observable<Individual[]>;
  constructor(private tarefasService: TarefasService){


    this.dataSource = this.tarefasService.list();
  }
  columnsToDisplay = ['titulo', 'data', 'tempo'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Individual | null = null;
}




