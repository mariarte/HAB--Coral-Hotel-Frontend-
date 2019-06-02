import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  constructor(private http: HttpClient) {}

  insertOrder({ experience }) {
    return this.http.post(`${environment.apiBaseUrl}/order`, {
      idExperience: experience.idExperience,
      units: experience.quantity,
      comments: experience.comments
    });
  }
}
