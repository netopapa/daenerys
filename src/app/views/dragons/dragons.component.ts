import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/providers/services/security.service';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss']
})
export class DragonsComponent {

  constructor(private security: SecurityService) { }

  public logout(): void {
    this.security.logout();
  }

}
