import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { CoralHotelUser } from "../core.models";

@Injectable({
  providedIn: "root"
})
export class UserService {
  currentUser: CoralHotelUser;

  constructor(private http: HttpClient) {}

  /**
   * Función que obtiene el perfil del usuario
   */
  getUserProfile() {
    return this.http
      .get(`${environment.apiBaseUrl}/user/profile`)
      .pipe(tap((user: CoralHotelUser) => (this.currentUser = user)));
  }

  /**
   * Función que actualiza el perfil del usuario
   * @param profile
   */
  updateProfile(profile) {
    return this.http.put(`${environment.apiBaseUrl}/user`, profile).pipe(
      tap(() => {
        this.currentUser = {
          ...this.currentUser,
          ...profile
        };
      })
    );
  }

  /**
   * Función que elimina el perfil del usuario
   * @param profile
   */
  deleteProfile(profile) {
    return this.http
      .delete(`${environment.apiBaseUrl}/user/delete`)
      .pipe(tap((user: CoralHotelUser) => (this.currentUser = user)));
  }
}
