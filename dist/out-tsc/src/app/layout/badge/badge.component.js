import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { OrderService } from "src/app/core/services/order.service";
import { BookingService } from "src/app/core/services/booking.service";
import { UserService } from "src/app/core/services/user.service";
var BadgeComponent = /** @class */ (function () {
    // counter = 0;
    function BadgeComponent(userService, orderService, bookingService) {
        this.userService = userService;
        this.orderService = orderService;
        this.bookingService = bookingService;
    }
    BadgeComponent.prototype.ngOnInit = function () {
        // this.bookingService.getOrderCount();
    };
    BadgeComponent.prototype.getBookings = function (idUser) {
        this.bookingService // muestra TODAS las order en la cesta
            .getBookings(this.userService.currentUser.idUser)
            .subscribe();
    };
    BadgeComponent = tslib_1.__decorate([
        Component({
            selector: "sn-badge",
            templateUrl: "./badge.component.html",
            styleUrls: ["./badge.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            OrderService,
            BookingService])
    ], BadgeComponent);
    return BadgeComponent;
}());
export { BadgeComponent };
//# sourceMappingURL=badge.component.js.map