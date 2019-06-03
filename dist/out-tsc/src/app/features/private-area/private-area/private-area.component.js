import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { UserService } from "src/app/core/services/user.service";
import { PrivateAreaService } from "src/app/core/services/private-area.service";
// import { BookingService } from "src/app/core/services/booking.service";
var PrivateAreaComponent = /** @class */ (function () {
    function PrivateAreaComponent(userService, 
    // public bookingService: BookingService,
    privateArea) {
        this.userService = userService;
        this.privateArea = privateArea;
    }
    PrivateAreaComponent.prototype.ngOnInit = function () {
        this.privateArea.getExperiences().subscribe();
        // this.bookingService.getOrderCount();
    };
    PrivateAreaComponent = tslib_1.__decorate([
        Component({
            selector: "sn-private-area",
            templateUrl: "./private-area.component.html",
            styleUrls: ["./private-area.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            PrivateAreaService])
    ], PrivateAreaComponent);
    return PrivateAreaComponent;
}());
export { PrivateAreaComponent };
//# sourceMappingURL=private-area.component.js.map