import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { Router } from '@angular/router';

import { logout } from './logout.actions';

@Injectable()
export class LogoutEffects {
  public logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          this.persistanceService.set('jwt-token', '');
          this.router.navigateByUrl('/');
        }),
      ),
    { dispatch: false },
  );

  public constructor(
    private actions$: Actions,
    private persistanceService: PersistanceService,
    private router: Router,
  ) {}
}
