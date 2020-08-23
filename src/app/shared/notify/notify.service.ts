import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum NotifyType {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface NotifyBody {
  type: NotifyType;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  private mySource = new Subject<NotifyBody>();
  public event$ = this.mySource.asObservable();

  constructor() { }

  public toast(type: NotifyType, message: string): void {
    this.mySource.next({ type, message });
  }

}
