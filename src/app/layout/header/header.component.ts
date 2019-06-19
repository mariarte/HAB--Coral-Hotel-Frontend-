import { Component } from "@angular/core";

@Component({
  selector: "sn-header",
  template: `
    <nav class="navbar justify-content-center" routerLink="/private-area">
      <img
        class="icon"
        src="../../../../assets/images/favicon.png"
        alt="Coral Hotel Icon"
      />
      <p>
        The Coral Hotel
      </p>
    </nav>
  `,
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponents {}
