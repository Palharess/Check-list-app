import {Component, EventEmitter, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {Individual} from "../model/individual";
import {MatToolbar} from "@angular/material/toolbar";
import {TarefasService} from "../services/tarefas.service";
import {catchError, Observable, of, tap} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatDialog} from "@angular/material/dialog";
import {ErrorPopComponent} from "../../shared/componentes/error-pop/error-pop.component";
import {ActivatedRoute, Router} from "@angular/router";
import {EditService} from "../services/edit.service";
import {DialogComponent} from "../../shared/componentes/dialog/dialog.component";




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
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatToolbar, AsyncPipe, NgIf, MatProgressSpinner],
})
export class TableExpandableRowsExample {
  private route: ActivatedRoute;
  edit_button_clicked: boolean = false;
  @Output() dataLoader = new EventEmitter<Individual[]>();
  dataSource$:Observable<Individual[]>;
  constructor(private tarefasService: TarefasService,
              public dialog: MatDialog, private router: Router, private editService: EditService,
              route: ActivatedRoute
  ){
    this.dataSource$ = this.tarefasService.list().pipe(
      catchError(err => {
        this.error("Erro ao buscar tarefas.");
        console.log('Error fetching data', err);
        return of([]);
      }),
    tap(data => this.dataLoader.emit(data))
    );
    this.editService.currentEditStatus.subscribe(editStatus => this.edit_button_clicked = editStatus);
    this.editService.editButtonClickedStatus.subscribe(status => {
      if (status) {
        this.expandedElement = null;
        this.editService.setEditButtonClicked(false); // reset the flag
      }
    });
    this.route = route;
  }



  error(msg: string) {
    this.dialog.open(ErrorPopComponent, {
      data: msg
    });
  }

  navigateToEditPage(element: Individual) {
    this.editService.changeEditStatus(true);
    this.router.navigate(['edit'], {state: {data: element},relativeTo: this.route});

  }

  columnsToDisplay = ['_id','titulo', 'data', 'tempo' ];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Individual | null = null;
}




