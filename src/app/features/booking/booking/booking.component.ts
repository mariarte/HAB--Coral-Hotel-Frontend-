import { Component, OnInit } from "@angular/core";
import { BookingService } from "src/app/core/services/booking.service";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "sn-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"]
})
export class BookingComponent implements OnInit {
  constructor(
    public userService: UserService,
    public bookingService: BookingService
  ) {}

  ngOnInit() {
    this.bookingService
      .getBookings(this.userService.currentUser.idUser)
      .subscribe();

    console.log(this.userService.currentUser.fullName);
  }
}
