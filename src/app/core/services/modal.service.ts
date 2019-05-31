import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root" // Obligatorio!! Generar una unica instancia
})
export class ModalService {
  opened = false;

  title = "";

  content: "";

  open(title, content) {
    this.opened = true;
    this.title = title;
    this.content = content;
  }

  close() {
    this.opened = false;
  }
}
