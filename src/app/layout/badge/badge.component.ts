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
  constructor(
    public userService: UserService,
    public orderService: OrderService,
    public bookingService: BookingService
  ) {}

  ngOnInit() {}

  /**
   * Obtiene TODAS las order en la cesta
   * @param {Number} idUser
   */
  getBookings(idUser) {
    this.bookingService
      .getBookings(this.userService.currentUser.idUser)
      .subscribe();
  }
}
