import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";

import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService && this.authService.authInfo) {
      const { resultToken } = this.authService.authInfo;
      // console.log({ resultToken });
      request = request.clone({
        setHeaders: {
          Authorization: `JWT ${resultToken}`
        }
      });
    }

    return next.handle(request);
  }
}
