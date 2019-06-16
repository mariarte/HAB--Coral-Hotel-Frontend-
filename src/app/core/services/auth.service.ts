import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { AuthInfo } from "../core.models";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authInfo: AuthInfo;

  constructor(private http: HttpClient, private router: Router) {
    this.authInfo = JSON.parse(localStorage.getItem("auth"));
  }

  /**
   * Función que realiza el login
   * @param {Objeto} user
   */
  login({ email, password }) {
    return this.http
      .post(`${environment.apiBaseUrl}/account/login`, {
        email,
        password
      })
      .pipe(
        tap((info: AuthInfo) => {
          this.authInfo = info;
          localStorage.setItem("auth", JSON.stringify(info));
        })
      );
  }

  /**
   * Función que realiza el register
   * @param {Object} user
   */
  register({ fullName, email, password }) {
    return this.http.post(`${environment.apiBaseUrl}/account`, {
      fullName,
      email,
      password
    });
  }

  /**
   * Función que realiza logout, borrando los datos del usuario
   */
  logout() {
    localStorage.removeItem("auth");
    this.authInfo = null;
    location.href = "/welcome";
  }
}
