import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { UserService } from "src/app/core/services/user.service";
import { BookingService } from "src/app/core/services/booking.service";

@Component({
  selector: "sn-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.scss"]
})
export class MainLayoutComponent implements OnInit {
  constructor(
    // public userService: UserService,
    public authService: AuthService
  ) // public bookingService: BookingService
  {}

  ngOnInit() {
    // this.bookingService // Muestro las order de la cesta para que se vayan actualizando
    //   .getBookings(this.userService.currentUser.idUser)
    //   .subscribe();
  }
}
