import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
var BookingConfirmedService = /** @class */ (function () {
    function BookingConfirmedService(http) {
        this.http = http;
    }
    BookingConfirmedService.prototype.getBookingsConfirmed = function (idUser) {
        var _this = this;
        return this.http
            .get(environment.apiBaseUrl + "/order/confirmed")
            .pipe(tap(function (bookings) { return (_this.bookings = bookings); }));
    };
    BookingConfirmedService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], BookingConfirmedService);
    return BookingConfirmedService;
}());
export { BookingConfirmedService };
//# sourceMappingURL=booking-confirmed.service.js.map