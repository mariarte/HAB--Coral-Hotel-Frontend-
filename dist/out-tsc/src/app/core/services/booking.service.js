import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
var BookingService = /** @class */ (function () {
    function BookingService(http) {
        this.http = http;
        this.bookings = [];
    }
    BookingService.prototype.getBookings = function (idUser) {
        var _this = this;
        return this.http
            .get(environment.apiBaseUrl + "/order")
            .pipe(tap(function (bookings) { return (_this.bookings = bookings); }));
    };
    BookingService.prototype.getOrderCount = function () {
        var count = 0;
        this.bookings.forEach(function (booking) { return (count = count + booking.units); });
        // console.log("COUNT: ", count);
        return count;
    };
    BookingService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], BookingService);
    return BookingService;
}());
export { BookingService };
//# sourceMappingURL=booking.service.js.map