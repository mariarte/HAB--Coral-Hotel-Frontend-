import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
// import { AuthService } from "./auth.service";
import { CoralHotelUser } from "../core.models";

@Injectable({
  providedIn: "root" // Obligatorio!! Generar una unica instancia
})
export class UserService {
  currentUser: CoralHotelUser;

  constructor(private http: HttpClient) {}

  getUserProfile() {
    return this.http
      .get(`${environment.apiBaseUrl}/user/profile`)
      .pipe(tap((user: CoralHotelUser) => (this.currentUser = user)));
  }

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

  deleteProfile(profile) {
    return this.http
      .delete(`${environment.apiBaseUrl}/user/delete`)
      .pipe(tap((user: CoralHotelUser) => (this.currentUser = user)));
  }
}
