import { Component, OnInit } from "@angular/core";
import { OrderService } from "src/app/core/services/order.service";
import { BookingService } from "src/app/core/services/booking.service";
@Component({
  selector: "sn-badge",
  templateUrl: "./badge.component.html",
  styleUrls: ["./badge.component.scss"]
})
export class BadgeComponent implements OnInit {
  constructor(
    public orderService: OrderService,
    public bookingService: BookingService
  ) {}

  ngOnInit() {
    this.bookingService.showCountOrders().subscribe();
  }
}
