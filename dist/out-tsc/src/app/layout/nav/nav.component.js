import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { UserService } from "src/app/core/services/user.service";
var NavComponent = /** @class */ (function () {
    function NavComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    NavComponent.prototype.ngOnInit = function () { };
    NavComponent = tslib_1.__decorate([
        Component({
            selector: "sn-nav",
            templateUrl: "./nav.component.html",
            styleUrls: ["./nav.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            UserService])
    ], NavComponent);
    return NavComponent;
}());
export { NavComponent };
//# sourceMappingURL=nav.component.js.map