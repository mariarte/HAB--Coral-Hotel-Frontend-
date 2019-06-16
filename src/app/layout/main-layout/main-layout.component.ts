import { Component, OnInit, HostListener } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "sn-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.scss"]
})
export class MainLayoutComponent implements OnInit {
  sticky = false;
  menuPosition = 106;

  constructor(
    public userService: UserService,
    public authService: AuthService
  ) {}

  ngOnInit() {}

  /**
   * Fija el aside a la parte derecha
   */
  @HostListener("window:scroll", ["$event"])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.menuPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
