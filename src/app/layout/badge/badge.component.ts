import { Component, OnInit, HostListener } from "@angular/core";
import { OrderService } from "src/app/core/services/order.service";
import { BookingService } from "src/app/core/services/booking.service";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "sn-badge",
  templateUrl: "./badge.component.html",
  styleUrls: ["./badge.component.scss"]
})
export class BadgeComponent implements OnInit {
  // counter = 0;
  constructor(
    public userService: UserService,
    public orderService: OrderService,
    public bookingService: BookingService
  ) {}

  ngOnInit() {}

  getBookings(idUser) {
    this.bookingService // muestra TODAS las order en la cesta
      .getBookings(this.userService.currentUser.idUser)
      .subscribe();
  }
}
