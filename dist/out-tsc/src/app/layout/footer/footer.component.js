import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
var FooterComponents = /** @class */ (function () {
    function FooterComponents(router) {
        this.router = router;
    }
    FooterComponents = tslib_1.__decorate([
        Component({
            selector: "sn-footer",
            template: "\n    <nav class=\"navbar justify-content-center\">\n      <p>\n        Creado con <i class=\"fa fa-heart\"></i> por\n        <span> \u00A9 Mar\u00EDa Arteaga \u00B7 </span>\n        <a target=\"_blank\" routerLink=\"about\">About</a>\n        <!-- Tengo que importar el modulo que lo contiene en layout.module.ts-->\n      </p>\n    </nav>\n  ",
            styleUrls: ["./footer.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], FooterComponents);
    return FooterComponents;
}());
export { FooterComponents };
//# sourceMappingURL=footer.component.js.map