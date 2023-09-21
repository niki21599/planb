import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { FirebaseService } from './firebase.service';

export const authGuard: CanActivateFn = (route, state) => {
  const firebaseService: FirebaseService = inject(FirebaseService);
  const router: Router = inject(Router);


  if(firebaseService.isAuthenticated)
    return true;
  router.navigate(["/login"]);

  return false;
};
