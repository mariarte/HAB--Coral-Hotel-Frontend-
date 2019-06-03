import * as tslib_1 from "tslib";
import { Directive, Input, HostListener } from "@angular/core";
import { FormGroup } from "@angular/forms";
var MarkAsTouchedDirective = /** @class */ (function () {
    function MarkAsTouchedDirective() {
    }
    MarkAsTouchedDirective.prototype.onSubmit = function (event) {
        Object.values(this.snMarkAsTouched.controls).forEach(function (control) {
            return control.markAsTouched();
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", FormGroup)
    ], MarkAsTouchedDirective.prototype, "snMarkAsTouched", void 0);
    tslib_1.__decorate([
        HostListener("submit", ["$event"]),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], MarkAsTouchedDirective.prototype, "onSubmit", null);
    MarkAsTouchedDirective = tslib_1.__decorate([
        Directive({
            selector: "[snMarkAsTouched]"
        })
    ], MarkAsTouchedDirective);
    return MarkAsTouchedDirective;
}());
export { MarkAsTouchedDirective };
//# sourceMappingURL=mark-as-touched.directive.js.map