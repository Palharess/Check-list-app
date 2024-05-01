import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeleteService {
  private deleteSource = new BehaviorSubject<boolean>(false);
  currentDeleteStatus = this.deleteSource.asObservable();

  changeDeleteStatus(status: boolean) {
    this.deleteSource.next(status);
  }
  private deleteButtonClickedSource = new BehaviorSubject<boolean>(false);
  deleteButtonClickedStatus = this.deleteButtonClickedSource.asObservable();

  setDeleteButtonClicked(status: boolean) {
    this.deleteButtonClickedSource.next(status);
  }

}
