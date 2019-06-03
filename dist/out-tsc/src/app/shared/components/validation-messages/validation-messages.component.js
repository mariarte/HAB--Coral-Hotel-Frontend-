import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
var ValidationMessagesComponent = /** @class */ (function () {
    function ValidationMessagesComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", FormControl)
    ], ValidationMessagesComponent.prototype, "control", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", FormGroup)
    ], ValidationMessagesComponent.prototype, "group", void 0);
    ValidationMessagesComponent = tslib_1.__decorate([
        Component({
            selector: "sn-validation-messages",
            templateUrl: "./validation-messages.component.html"
        })
    ], ValidationMessagesComponent);
    return ValidationMessagesComponent;
}());
export { ValidationMessagesComponent };
//# sourceMappingURL=validation-messages.component.js.map