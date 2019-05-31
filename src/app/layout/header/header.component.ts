import { Component } from "@angular/core";

@Component({
  selector: "sn-header",
  template: `
    <nav class="navbar justify-content-center">
      <p>
        <i class="fas fa-h-square"></i>
        The Coral Hotel
      </p>
    </nav>
  `,
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponents {}
