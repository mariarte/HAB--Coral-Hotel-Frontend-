import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoaderService {
  isLoading = false;

  /**
   * Función que muestra el loader
   * @param {Boolean} isLoading
   */
  setLoading(isLoading: boolean) {
    setTimeout(() => {
      this.isLoading = isLoading;
    });
  }
}
