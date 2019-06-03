import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent(authService) {
        this.authService = authService;
    }
    MainLayoutComponent.prototype.ngOnInit = function () { };
    MainLayoutComponent = tslib_1.__decorate([
        Component({
            selector: "sn-main-layout",
            templateUrl: "./main-layout.component.html",
            styleUrls: ["./main-layout.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [AuthService])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());
export { MainLayoutComponent };
//# sourceMappingURL=main-layout.component.js.map