import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { BookingConfirmedService } from "src/app/core/services/booking-confirmed.service";
import { UserService } from "src/app/core/services/user.service";
var BookingConfirmedComponent = /** @class */ (function () {
    function BookingConfirmedComponent(userService, bookingConfirmedService) {
        this.userService = userService;
        this.bookingConfirmedService = bookingConfirmedService;
    }
    BookingConfirmedComponent.prototype.ngOnInit = function () {
        this.bookingConfirmedService // carga las order CONFIRMADAS
            .getBookingsConfirmed(this.userService.currentUser.idUser)
            .subscribe();
        console.log(this.userService.currentUser.fullName);
    };
    BookingConfirmedComponent = tslib_1.__decorate([
        Component({
            selector: "sn-booking-confirmed",
            templateUrl: "./booking-confirmed.component.html",
            styleUrls: ["./booking-confirmed.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            BookingConfirmedService])
    ], BookingConfirmedComponent);
    return BookingConfirmedComponent;
}());
export { BookingConfirmedComponent };
//# sourceMappingURL=booking-confirmed.component.js.map