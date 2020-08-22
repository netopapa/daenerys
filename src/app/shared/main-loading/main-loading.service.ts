import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainLoadingService {

  public static isLoading = new Subject<boolean>();

  public static show(): void {
    this.isLoading.next(true);
  }

  public static hide(): void {
    this.isLoading.next(false);
  }
}
