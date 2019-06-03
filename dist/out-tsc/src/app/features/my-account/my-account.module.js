import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MyAccountComponent } from "./my-account/my-account.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
var routes = [
    {
        path: "",
        component: MyAccountComponent
    }
];
var MyAccountModule = /** @class */ (function () {
    function MyAccountModule() {
    }
    MyAccountModule = tslib_1.__decorate([
        NgModule({
            declarations: [MyAccountComponent],
            imports: [
                CommonModule,
                ReactiveFormsModule,
                SharedModule,
                RouterModule.forChild(routes)
            ]
        })
    ], MyAccountModule);
    return MyAccountModule;
}());
export { MyAccountModule };
//# sourceMappingURL=my-account.module.js.map