import { Component, OnInit } from "@angular/core";
import { BookingConfirmedService } from "src/app/core/services/booking-confirmed.service";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "sn-booking-confirmed",
  templateUrl: "./booking-confirmed.component.html",
  styleUrls: ["./booking-confirmed.component.scss"]
})
export class BookingConfirmedComponent implements OnInit {
  constructor(
    public userService: UserService,
    public bookingConfirmedService: BookingConfirmedService
  ) {}

  ngOnInit() {
    this.bookingConfirmedService // carga las order CONFIRMADAS
      .getBookingsConfirmed(this.userService.currentUser.idUser)
      .subscribe();

    console.log(this.userService.currentUser.fullName);
  }
}
