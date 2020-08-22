import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../constants/api.constants';
import { Dragon } from '../models/dragon.model';
import { CrudService } from './base/crud.service';

@Injectable({
  providedIn: 'root'
})
export class DragonService extends CrudService<Dragon> {

  constructor(http: HttpClient) {
    super(http, ENDPOINTS.DRAGON);
  }
}
