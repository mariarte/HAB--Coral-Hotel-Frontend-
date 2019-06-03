import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { WelcomeComponents } from "./welcome/welcome.component";
import { SharedModule } from "src/app/shared/shared.module";
var routes = [
    {
        path: "",
        component: WelcomeComponents // apunta al WelcomeComponents
    }
];
var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule = tslib_1.__decorate([
        NgModule({
            declarations: [WelcomeComponents],
            imports: [
                CommonModule,
                RouterModule.forChild(routes),
                SharedModule,
                ReactiveFormsModule
            ]
        })
    ], WelcomeModule);
    return WelcomeModule;
}());
export { WelcomeModule };
//# sourceMappingURL=welcome.module.js.map