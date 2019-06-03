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
    this.bookingService // carga las order TODAS
      .getBookings(this.userService.currentUser.idUser)
      .subscribe();
  }

  // añadir o restar cantidad en el boton de unidades
  substractQuantity(booking) {
    if (booking.units <= 1) {
      return;
    }
    booking.units = booking.units - 1;
  }

  addQuantity(booking) {
    booking.units = booking.units + 1;
  }

  updateOrder(idOrder) {
    this.bookingService.updateOrder(idOrder).subscribe();
  }

  deleteOrder(idOrder) {
    this.bookingService.deleteOrder(idOrder).subscribe();
  }
}
