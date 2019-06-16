import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener
} from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "sn-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  sticky = false;
  asidePosition = 106;

  constructor(
    public authService: AuthService,
    public userService: UserService
  ) {}

  ngOnInit() {}

  /**
   * Fija el menú a la parte izquierda
   */
  @HostListener("window:scroll", ["$event"])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.asidePosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
