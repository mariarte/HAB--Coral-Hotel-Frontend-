import { Component, OnInit, HostListener } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { UserService } from "src/app/core/services/user.service";
import { BookingService } from "src/app/core/services/booking.service";

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
    public authService: AuthService // public bookingService: BookingService
  ) {}

  ngOnInit() {
    // this.bookingService // Muestro las order de la cesta para que se vayan actualizando
    //   .getBookings(this.userService.currentUser.idUser)
    //   .subscribe();
  }

  @HostListener("window:scroll", ["$event"])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    // console.log({ windowScroll, menuPosition: this.menuPosition });
    if (windowScroll >= this.menuPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
