import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrivateAreaComponent } from "./private-area/private-area.component";
import { RouterModule } from "@angular/router";
import { LayoutModule } from "../../layout/layout.module";
var routes = [
    {
        path: "",
        component: PrivateAreaComponent
    }
];
var PrivateAreaModule = /** @class */ (function () {
    function PrivateAreaModule() {
    }
    PrivateAreaModule = tslib_1.__decorate([
        NgModule({
            declarations: [PrivateAreaComponent],
            imports: [CommonModule, RouterModule.forChild(routes), LayoutModule]
        })
    ], PrivateAreaModule);
    return PrivateAreaModule;
}());
export { PrivateAreaModule };
//# sourceMappingURL=private-area.module.js.map