import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { MainLoadingService } from './main-loading.service';

@Component({
  selector: 'app-main-loading',
  templateUrl: './main-loading.component.html',
  styleUrls: ['./main-loading.component.scss']
})
export class MainLoadingComponent {

  public isLoading: Subject<boolean> = MainLoadingService.isLoading;

}
