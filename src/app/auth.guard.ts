import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { FirebaseService } from './firebase.service';
import { BackendService } from './service/backend.service';

export const authGuard: CanActivateFn = (route, state) => {
  const backendService: BackendService = inject(BackendService);
  const router: Router = inject(Router);


  if(backendService.user)
    return true;
  router.navigate(["/login"]);

  return false;
};
