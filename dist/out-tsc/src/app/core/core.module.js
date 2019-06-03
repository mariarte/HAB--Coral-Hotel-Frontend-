import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JWTInterceptor } from "./interceptors/jwt.interceptor";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib_1.__decorate([
        NgModule({
            declarations: [],
            imports: [CommonModule, HttpClientModule],
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=core.module.js.map