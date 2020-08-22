import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class RestService {

    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        public http: HttpClient
    ) { }

    get(url: string, data?: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }), params: data
        };

        return this.http.get<any>(url, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleErrorObservable.bind(this))
        );
    }

    post(url: string, data: any): Observable<any> {
        return this.http.post<any>(url, data, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleErrorObservable.bind(this))
        );
    }

    put(url: string, data: any): Observable<any> {
        return this.http.put<any>(url, data, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleErrorObservable.bind(this))
        );
    }

    delete(url: string): Observable<any> {
        return this.http.delete<any>(url, this.httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleErrorObservable.bind(this))
        );
    }

    private handleErrorObservable(error: HttpErrorResponse): Observable<never> {
        if (error.status === 401 || error.status === 403) {
            console.error('Não autorizado !');
        } else if (error.status === 0) {
            console.error('Sem conexão !');
            // this.feedService.simpleFeed(SnackType.WARNING, 'Erro com a conexão :(');
        } else {
            console.error(error);
            // this.feedService.throwError(error.error);
        }

        return throwError(error);

    }

    private extractData(res: any): any {
        try {
            const body = res.json();
            return body;
        } catch (error) {
            return res;
        }
    }
}
