import { Component, OnInit } from "@angular/core";
import { BookingConfirmedService } from "src/app/core/services/booking-confirmed.service";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "sn-ticket-detail",
  templateUrl: "./ticket-detail.component.html",
  styleUrls: ["./ticket-detail.component.scss"]
})
export class TicketDetailComponent implements OnInit {
  constructor(
    public userService: UserService,
    public bookingConfirmedService: BookingConfirmedService
  ) {}

  ngOnInit() {
    this.bookingConfirmedService.getTotalAccount();
  }
}
