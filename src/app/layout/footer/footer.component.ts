import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "sn-footer",
  template: `
    <nav class="navbar justify-content-center z-5000">
      <p>
        Creado con <i class="fa fa-heart"></i> por
        <span> © María Arteaga · </span>
        <a target="_blank" routerLink="about">About</a>
      </p>
    </nav>
  `,
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponents {
  constructor(private router: Router) {}
}
