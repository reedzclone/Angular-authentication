import { Injectable, inject } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { ApiService } from './shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

   service = inject(ApiService)

  intercept(req:any, next: any) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.service.getToken()}`
      }
    });
    return next.handle(tokenizedReq);
  }

}
