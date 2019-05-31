import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate
} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, snapshot: RouterStateSnapshot) {
    if (this.authService && this.authService.authInfo) {
      const { resultToken } = this.authService.authInfo;

      if (resultToken) {
        return true;
      }
    }

    this.router.navigate(["/welcome"]);

    return false;
  }
}
