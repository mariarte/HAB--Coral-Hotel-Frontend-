import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Booking } from "src/app/features/booking/booking.models";

@Injectable({
  providedIn: "root"
})
export class BookingService {
  bookings: Booking[];
  count = 0;
  constructor(private http: HttpClient) {}

  getBookings(idUser) {
    return this.http
      .get(`${environment.apiBaseUrl}/order/showOrders`)
      .pipe(tap((bookings: Booking[]) => (this.bookings = bookings)));
  }

  showCountOrders() {
    return this.http.get(`${environment.apiBaseUrl}/order/showOrders`).pipe(
      tap((bookings: Booking[]) =>
        this.bookings.forEach(bookings => {
          this.count = +1;
          return this.count;
        })
      )
    );
  }
}
