import { Component } from "@angular/core";
import { LoaderService } from "./core/services/loader.service";

@Component({
  selector: "sn-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "coral-hotel";

  constructor(public loaderService: LoaderService) {}
}
