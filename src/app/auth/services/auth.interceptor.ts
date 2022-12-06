import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  public constructor(private persistanceService: PersistanceService) {}

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.persistanceService.get('jwt-token');
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : '',
      },
    });

    return next.handle(clonedRequest);
  }
}
