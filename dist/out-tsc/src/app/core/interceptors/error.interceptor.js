import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { ToastService } from "../services/toast.service";
import { AuthService } from "../services/auth.service";
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authService, router, toastService) {
        this.authService = authService;
        this.router = router;
        this.toastService = toastService;
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req).pipe(catchError(function (error) {
            if (error.url.indexOf("/account/login") === -1 &&
                _this.router.routerState.snapshot.url !== "/welcome" &&
                error.status === 401) {
                _this.authService.logout();
            }
            else {
                //   error.error.details.forEach(error => {
                //     this.toastService.addErrorToast(error, 5000);
                //   });
                _this.toastService.addErrorToast(error.error[0], 5000);
            }
            return throwError(error);
        }));
    };
    ErrorInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AuthService,
            Router,
            ToastService])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());
export { ErrorInterceptor };
//# sourceMappingURL=error.interceptor.js.map