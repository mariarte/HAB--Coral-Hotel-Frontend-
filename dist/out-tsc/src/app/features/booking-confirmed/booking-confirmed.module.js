import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookingConfirmedComponent } from "./booking-confirmed/booking-confirmed.component";
import { RouterModule } from "@angular/router";
import { LayoutModule } from "../../layout/layout.module";
import { SharedModule } from "src/app/shared/shared.module";
var routes = [
    {
        path: "",
        component: BookingConfirmedComponent
    }
];
var BookingConfirmedModule = /** @class */ (function () {
    function BookingConfirmedModule() {
    }
    BookingConfirmedModule = tslib_1.__decorate([
        NgModule({
            declarations: [BookingConfirmedComponent],
            imports: [
                CommonModule,
                RouterModule.forChild(routes),
                LayoutModule,
                SharedModule
            ]
        })
    ], BookingConfirmedModule);
    return BookingConfirmedModule;
}());
export { BookingConfirmedModule };
//# sourceMappingURL=booking-confirmed.module.js.map