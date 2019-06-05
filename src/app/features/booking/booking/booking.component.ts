import { Component, OnInit, ViewChild } from "@angular/core";
import { BookingService } from "src/app/core/services/booking.service";
import { UserService } from "src/app/core/services/user.service";
import { ToastService } from "src/app/core/services/toast.service";

@Component({
  selector: "sn-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"]
})
export class BookingComponent implements OnInit {
  @ViewChild("comments") commentsValue;

  constructor(
    public userService: UserService,
    public bookingService: BookingService,
    private toastService: ToastService
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

  // captura el event.target.value, que es el valor del textarea y se lo pone al booking que tengo
  updateBookingComments(booking, event) {
    const textareaValue = event.target.value;
    if (textareaValue != "") {
      // si el usuario no introduce nada lo envio vacio...asi no muestra null
      booking.comments = textareaValue;
    } else {
      booking.comments = "";
    }
  }

  updateOrder(idOrder: number, units: number, comments: string) {
    // console.log("COMENTARIO: ", comments);
    this.bookingService.updateOrder(idOrder, units, comments).subscribe(() => {
      this.toastService.addToast(
        "RESERVA CONFIRMADA",
        "Su reserva ha sido confirmada. Puede revisarlas en el apartado 'Mis Reservas' "
      );
    });
    // ***********************
    //* *********************
    // INCLUIR EMAIL A USUARIO Y A RECEPCION
  }

  deleteOrder(idOrder) {
    this.bookingService.deleteOrder(idOrder).subscribe(() => {
      this.toastService.addToast(
        "PRE-RESERVA ELIMINADA",
        "La pre-reserva se ha eliminado de su cuenta. Si lo desea, puede volver al catálogo de experiencias para seleccionar la que desee."
      );
    });
  }
}
