import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from './shared/api.service';



export const authGuard: CanActivateFn = (route, state) => {

  const service = inject(ApiService);
  const router = inject(Router);

  if(service.loggedIn()) {
    return true
  }else {
    router.navigate(['/login']);
    return false
  }

};
