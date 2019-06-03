import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { BookingService } from "src/app/core/services/booking.service";
import { UserService } from "src/app/core/services/user.service";
var BookingComponent = /** @class */ (function () {
    function BookingComponent(userService, bookingService) {
        this.userService = userService;
        this.bookingService = bookingService;
    }
    BookingComponent.prototype.ngOnInit = function () {
        this.bookingService // carga las order TODAS
            .getBookings(this.userService.currentUser.idUser)
            .subscribe();
        this.bookingService.getOrderCount();
        console.log(this.userService.currentUser.fullName);
    };
    BookingComponent = tslib_1.__decorate([
        Component({
            selector: "sn-booking",
            templateUrl: "./booking.component.html",
            styleUrls: ["./booking.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            BookingService])
    ], BookingComponent);
    return BookingComponent;
}());
export { BookingComponent };
//# sourceMappingURL=booking.component.js.map