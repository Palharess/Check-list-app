import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  private editSource = new BehaviorSubject<boolean>(false);
  currentEditStatus = this.editSource.asObservable();

  changeEditStatus(status: boolean) {
    this.editSource.next(true);
  }

  private editButtonClickedSource = new BehaviorSubject<boolean>(false);
  editButtonClickedStatus = this.editButtonClickedSource.asObservable();

  setEditButtonClicked(status: boolean) {
    this.editButtonClickedSource.next(status);
  }
}
