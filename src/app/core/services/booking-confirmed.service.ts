import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap, count } from "rxjs/operators";
import { Booking } from "src/app/features/booking/booking.models";

@Injectable({
  providedIn: "root"
})
export class BookingConfirmedService {
  bookings: Booking[];
  constructor(private http: HttpClient) {}

  /**
   * Función que muestra todas las booking (confirmadas) de un usuario
   * @param {Number} idUser
   */
  getBookingsConfirmed(idUser) {
    return this.http
      .get(`${environment.apiBaseUrl}/order/confirmed`)
      .pipe(tap((bookings: Booking[]) => (this.bookings = bookings)));
  }

  /**
   * Función que obtiene la suma total del precio de experiences confirmadas
   * @return {Number} total
   */
  getTotalAccount() {
    let total = 0;
    this.bookings.forEach(
      booking => (total = total + booking.price * booking.units)
    );
    return total;
  }
}
