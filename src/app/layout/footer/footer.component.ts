import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "sn-footer",
  template: `
    <nav class="navbar justify-content-center">
      <p>
        Creado con <i class="fa fa-heart"></i> por
        <span> © María Arteaga · </span>
        <a target="_blank" routerLink="about">About</a>
        <!-- Tengo que importar el modulo que lo contiene en layout.module.ts-->
      </p>
    </nav>
  `,
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponents {
  constructor(private router: Router) {}
}
