import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.opened = false;
        this.title = "";
    }
    ModalService.prototype.open = function (title, content) {
        this.opened = true;
        this.title = title;
        this.content = content;
    };
    ModalService.prototype.close = function () {
        this.opened = false;
    };
    ModalService = tslib_1.__decorate([
        Injectable({
            providedIn: "root" // Obligatorio!! Generar una unica instancia
        })
    ], ModalService);
    return ModalService;
}());
export { ModalService };
//# sourceMappingURL=modal.service.js.map