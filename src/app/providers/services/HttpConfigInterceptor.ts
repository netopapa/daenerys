import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MainLoadingService } from '../../shared/main-loading/main-loading.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    requestCount = 0;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.requestCount++;
        MainLoadingService.show();

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {

                if (event instanceof HttpResponse) {
                    this.requestCount--;
                    if (this.requestCount < 1) {
                        MainLoadingService.hide();
                    }
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {

                this.requestCount--;
                if (this.requestCount < 1) {
                    MainLoadingService.hide();
                }

                return throwError(error);
            }));
    }

}


