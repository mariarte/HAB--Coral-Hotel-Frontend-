import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root" // Obligatorio!! Generar una unica instancia
})
export class ModalService {
  opened = false;

  title = "";

  content: "";

  /**
   * Función que abre una notificación modal
   * @param {String} title
   * @param {String} content
   */
  open(title, content) {
    this.opened = true;
    this.title = title;
    this.content = content;
  }

  /**
   * Función que cierra una notificación modal
   */
  close() {
    this.opened = false;
  }
}
