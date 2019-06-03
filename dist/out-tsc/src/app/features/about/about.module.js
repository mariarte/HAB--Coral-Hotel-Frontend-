import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AboutComponents } from "./about/about.component";
var routes = [
    {
        path: "",
        component: AboutComponents // apunta al AboutComponents
    }
];
var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib_1.__decorate([
        NgModule({
            declarations: [AboutComponents],
            imports: [CommonModule, RouterModule.forChild(routes)]
        })
    ], AboutModule);
    return AboutModule;
}());
export { AboutModule };
//# sourceMappingURL=about.module.js.map