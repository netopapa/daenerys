import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dragon } from 'src/app/providers/models/dragon.model';
import { MainLoadingService } from 'src/app/shared/main-loading/main-loading.service';
import { DragonService } from '../../../providers/services/dragon.service';

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
        this.dragons = success.sort((a, b) => a.name.localeCompare(b.name));
        MainLoadingService.hide();
      },
      () => { MainLoadingService.hide(); }
    );
  }

  public create(): void {
    this.route.navigate(['form/']);
  }

  public edit(item: Dragon): void {
    this.route.navigate([`form/${item.id}`]);
  }

  public delete(item: Dragon): void {
    this.service.remove(item.id).subscribe(
      () => {
        this.getDragons();
      }
    );
  }

}
