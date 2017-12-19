import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  //CONTENT_TYPE = 'application/x-www-form-urlencoded';
  CONTENT_TYPE = "application/json";
  constructor() {

  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Content-Type': this.CONTENT_TYPE
      }
    });
    return next.handle(request);
  }



  public getToken(): string {
    return 'abcd';
  }
  errorMessage(err: any) {
    console.log(err);
    const message: any = err.message ? err.message : err;
    console.log(message);
  }
}