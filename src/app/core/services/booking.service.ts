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

  getBookings(idUser) {
    return this.http
      .get(`${environment.apiBaseUrl}/order`)
      .pipe(tap((bookings: Booking[]) => (this.bookings = bookings)));
  }

  getOrderCount() {
    let count = 0;
    this.bookings.forEach(booking => (count = count + booking.units));
    // console.log("COUNT: ", count);
    return count;
  }

  updateOrder(idOrder: number, units: number, comments: string) {
    console.log("Comentariooooo: ", comments);
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

  deleteOrder(idOrder: number) {
    return this.http.delete(`${environment.apiBaseUrl}/order/${idOrder}`).pipe(
      tap(() => {
        this.bookings = this.bookings.filter(
          booking => booking.idOrder !== idOrder
        );
        console.log("order eliminada: ", idOrder);
      })
    );
  }
}
