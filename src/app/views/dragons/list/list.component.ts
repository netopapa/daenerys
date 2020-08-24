import { Component, OnInit } from '@angular/core';
import { DragonService } from '../../../providers/services/dragon.service';
import { Dragon } from 'src/app/providers/models/dragon.model';
import { MainLoadingService } from 'src/app/shared/main-loading/main-loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public dragons: Dragon[] = [];

  constructor(
    private service: DragonService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getDragons();
  }

  private getDragons(): void {
    MainLoadingService.show();
    this.service.getAll().subscribe(
      success => {
        this.dragons = success;
        MainLoadingService.hide();
      },
      () => { MainLoadingService.hide(); }
    );
  }

  public newDragon(): void {
    this.route.navigate(['form/']);
  }

  public editDragon(item: Dragon): void {
    this.route.navigate([`form/${item.id}`]);
  }

}
