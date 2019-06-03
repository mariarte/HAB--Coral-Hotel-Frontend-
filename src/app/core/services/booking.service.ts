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

  updateOrder(idOrder) {
    return this.http.put(`${environment.apiBaseUrl}/order`, idOrder).pipe(
      tap(() => {
        this.bookings = {
          ...this.bookings,
          ...idOrder
        };
      })
    );
  }

  deleteOrder(idOrder) {
    return this.http.delete(`${environment.apiBaseUrl}/order`);
    // .pipe(tap((booking: Booking) => (this.bookings = booking)));
  }
}
