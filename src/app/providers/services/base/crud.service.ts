import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../../../constants/api.constants';
import { BaseModel } from '../../models/base/base.model';
import { RestService } from './rest-service';

export class CrudService<T extends BaseModel> extends RestService {

  baseURL = API_URL;

  constructor(
    public http: HttpClient,
    baseUrl: string
  ) {
    super(http);
    this.baseURL += baseUrl;
  }

  public getAll(): Observable<Array<T>> {
    return this.get(this.baseURL);
  }

  public getOne(id: number): Observable<T> {
    return this.get(`${this.baseURL}${id}`);
  }

  public save(data: T): Observable<T> {
    return this.post(this.baseURL, data);
  }

  public update(data: T): Observable<T> {
    return this.put(`${this.baseURL}${data.id}`, data);
  }

  public remove(id: number): Observable<any> {
    return this.delete(`${this.baseURL}${id}`);
  }
}
