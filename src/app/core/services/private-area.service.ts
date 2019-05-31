import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Experience } from "src/app/features/private-area/private-area.models";

@Injectable({
  providedIn: "root"
})
export class PrivateAreaService {
  experiences: Experience[];

  constructor(private http: HttpClient) {}

  getExperiences() {
    return this.http.get(`${environment.apiBaseUrl}/experiences`).pipe(
      tap(
        (experiences: Experience[]) =>
          (this.experiences = experiences.map(experience => {
            experience.quantity = 1;
            return experience;
          }))
      )
    );
  }

  search(experience: string) {
    return this.http
      .get(`${environment.apiBaseUrl}/experiences/${experience}`)
      .pipe(
        tap(
          (experiences: Experience[]) =>
            (this.experiences = experiences.map(experience => {
              experience.quantity = 1;
              return experience;
            }))
        )
      );
  }
}
