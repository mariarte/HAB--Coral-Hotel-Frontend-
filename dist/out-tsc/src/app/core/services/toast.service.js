import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
var ToastService = /** @class */ (function() {
    function ToastService() {
        this.toasts = [];
    }
    ToastService.prototype.addToast = function(title, message, variant, delay) {
        if (variant === void 0) { variant = "primary"; }
        if (delay === void 0) { delay = 6000; }
        this.toasts.unshift({
            title: title,
            message: message,
            variant: variant
                // delay
        });
        if (delay) {
            this.delayAndRemove(delay);
        }
    };
    ToastService.prototype.addErrorToast = function(error, delay) {
        this.toasts.unshift({
            title: "Error",
            message: error && error.message || 'No error message',
            variant: "danger"
        });
        if (delay) {
            this.delayAndRemove(delay);
        }
    };
    ToastService.prototype.isErrorToast = function(toast) {
        if (toast.variant === "error") {
            return true;
        }
        return false;
    };
    ToastService.prototype.delayAndRemove = function(milliseconds) {
        var _this = this;
        setTimeout(function() {
            _this.toasts.pop();
        }, milliseconds);
    };
    ToastService.prototype.remove = function(index) {
        if (index) {
            this.toasts.splice(index, 1);
        } else {
            this.toasts.pop();
        }
    };
    ToastService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        })
    ], ToastService);
    return ToastService;
}());
export { ToastService };
//# sourceMappingURL=toast.service.js.map