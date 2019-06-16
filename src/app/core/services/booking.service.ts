import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap, count } from "rxjs/operators";
import { Booking } from "src/app/features/booking/booking.models";

@Injectable({
  providedIn: "root"
})
export class BookingService {
  bookings: Booking[] = [];
  comments: "";

  constructor(private http: HttpClient) {}

  /**
   * Función que guarda la fecha de ahora en la experience seleccionada
   * @param {Object} booking
   * @return {Object} booking
   */
  private convertToLocaleDate(booking: Booking) {
    booking.orderDate = new Date(booking.orderDate.toLocaleString());
    return booking;
  }

  /**
   * Función que muestra todas las booking (no confirmadas) de un usuario
   * @param {Number} idUser
   */
  getBookings(idUser) {
    return this.http
      .get(`${environment.apiBaseUrl}/order`)
      .pipe(
        tap(
          (bookings: Booking[]) =>
            (this.bookings = bookings.map(this.convertToLocaleDate))
        )
      );
  }

  /**
   * Función que obtiene el contador de experiences que tiene la cesta
   * @return {Number} count
   */
  getOrderCount() {
    let count = 0;
    this.bookings.forEach(booking => (count = count + booking.units));
    return count;
  }

  /**
   * Función que modifica la order que está en la cesta y el usuario
   * la confirma, añadiendo los campos que se han cambiado
   * @param {Number} idOrder
   * @param {Number} units
   * @param {String} comments
   */
  updateOrder(idOrder: number, units: number, comments: string) {
    return this.http
      .put(`${environment.apiBaseUrl}/order`, { idOrder, units, comments })
      .pipe(
        tap(() => {
          this.bookings = this.bookings.filter(
            booking => booking.idOrder !== idOrder
          );
        })
      );
  }

  /**
   * Función que elimina la order que el usuario ha seleccionado de su cesta
   * @param {Number} idOrder
   */
  deleteOrder(idOrder: number) {
    return this.http.delete(`${environment.apiBaseUrl}/order/${idOrder}`).pipe(
      tap(() => {
        this.bookings = this.bookings.filter(
          booking => booking.idOrder !== idOrder
        );
      })
    );
  }
}
