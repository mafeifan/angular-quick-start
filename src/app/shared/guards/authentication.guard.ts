import { Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (AuthService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['/auth/login'], {queryParams: {redirect: state.url}, replaceUrl: true});
    return false;
  }
}
