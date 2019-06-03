import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { ToastService } from "../../core/services/toast.service";
var ToastComponent = /** @class */ (function () {
    function ToastComponent(toastService) {
        this.toastService = toastService;
    }
    ToastComponent = tslib_1.__decorate([
        Component({
            selector: "sn-toast",
            templateUrl: "./toast.component.html",
            styleUrls: ["./toast.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [ToastService])
    ], ToastComponent);
    return ToastComponent;
}());
export { ToastComponent };
//# sourceMappingURL=toast.component.js.map