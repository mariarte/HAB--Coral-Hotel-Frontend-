import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookingComponent } from "./booking/booking.component";
import { RouterModule } from "@angular/router";
import { LayoutModule } from "../../layout/layout.module";
import { SharedModule } from "src/app/shared/shared.module";
var routes = [
    {
        path: "",
        component: BookingComponent
    }
];
var BookingModule = /** @class */ (function () {
    function BookingModule() {
    }
    BookingModule = tslib_1.__decorate([
        NgModule({
            declarations: [BookingComponent],
            imports: [
                CommonModule,
                RouterModule.forChild(routes),
                LayoutModule,
                SharedModule
            ]
        })
    ], BookingModule);
    return BookingModule;
}());
export { BookingModule };
//# sourceMappingURL=booking.module.js.map