import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Dragon } from 'src/app/providers/models/dragon.model';
import { DragonService } from 'src/app/providers/services/dragon.service';
import { NotifyService, NotifyType } from 'src/app/shared/notify/notify.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public dragon: Dragon = new Dragon();
  public edit = false;

  constructor(
    private service: DragonService,
    private route: Router,
    private alertService: NotifyService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.edit = true;
      this.loadDragon(parseInt(id, 10));
    }
  }

  private loadDragon(id: number): void {
    this.service.getOne(id).subscribe(
      success => {
        this.dragon = success;
      }
    );
  }

  public save(): void {
    if (this.edit) {
      this.service.update(this.dragon).subscribe(
        () => {
          this.alertService.toast(NotifyType.SUCCESS, 'Dragon saved !');
          this.returnScreen();
        }
      );
    } else {
      this.service.save(this.dragon).subscribe(
        () => {
          this.alertService.toast(NotifyType.SUCCESS, 'Dragon saved !');
          this.returnScreen();
        }
      );
    }
  }

  public returnScreen(): void {
    this.route.navigate(['/']);
  }

}
