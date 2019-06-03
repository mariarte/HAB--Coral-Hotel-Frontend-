import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { ModalService } from "src/app/core/services/modal.service";
var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
    }
    ModalComponent.prototype.ngOnInit = function () { };
    ModalComponent = tslib_1.__decorate([
        Component({
            selector: "sn-modal",
            templateUrl: "./modal.component.html",
            styleUrls: ["./modal.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [ModalService])
    ], ModalComponent);
    return ModalComponent;
}());
export { ModalComponent };
//# sourceMappingURL=modal.component.js.map