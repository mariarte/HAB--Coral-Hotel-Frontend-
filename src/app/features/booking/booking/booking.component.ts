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
    this.bookingService // carga TODAS las order
      .getBookings(this.userService.currentUser.idUser)
      .subscribe();
  }

  /**
   * Función para disminuir la cantidad del valor
   * @param {Object} booking
   */
  substractQuantity(booking) {
    if (booking.units <= 1) {
      return;
    }
    booking.units = booking.units - 1;
  }

  /**
   * Función para aumentar la cantidad del valor
   * @param {Object} booking
   */
  addQuantity(booking) {
    booking.units = booking.units + 1;
  }

  /**
   * Captura el event.target.value, que es el valor del textarea
   * y se añade al booking actual
   * @param {Object} booking
   * @param {Event} event
   */
  updateBookingComments(booking, event) {
    const textareaValue = event.target.value;
    booking.comments = textareaValue;
  }

  /**
   * Añade una order desde la cesta a order confirmada
   * @param {Number} idOrder
   * @param {Number} units
   * @param {String} comments
   */
  updateOrder(idOrder: number, units: number, comments: string) {
    // console.log("COMENTARIO: ", comments);
    if (comments === null) {
      comments = "";
    }
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

  /**
   * Elimina una order que estaba en la cesta y el usuario decide borrarla
   * @param {Number} idOrder
   */
  deleteOrder(idOrder) {
    this.bookingService.deleteOrder(idOrder).subscribe(() => {
      this.toastService.addToast(
        "PRE-RESERVA ELIMINADA",
        "La pre-reserva se ha eliminado de su cuenta. Si lo desea, puede volver al catálogo de experiencias para seleccionar la que desee."
      );
    });
  }
}
