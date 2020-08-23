import { Component, OnInit } from '@angular/core';
import { NotifyBody, NotifyService, NotifyType } from './notify.service';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent implements OnInit {

  public notify: NotifyBody;
  public showToast = false;

  constructor(private service: NotifyService) { }

  ngOnInit(): void {
    this.service.event$.subscribe(
      (e: NotifyBody) => {
        this.callToast(e);
      }
    );
  }

  private callToast(body: NotifyBody): void {
    this.notify = body;
    this.showToast = true;
    setTimeout(() => { this.showToast = false; }, 4000);
  }

}
