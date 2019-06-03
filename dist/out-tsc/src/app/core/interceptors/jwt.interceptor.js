import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";
var JWTInterceptor = /** @class */ (function () {
    function JWTInterceptor(authService) {
        this.authService = authService;
    }
    JWTInterceptor.prototype.intercept = function (request, next) {
        if (this.authService && this.authService.authInfo) {
            var resultToken = this.authService.authInfo.resultToken;
            // console.log({ resultToken });
            request = request.clone({
                setHeaders: {
                    Authorization: "JWT " + resultToken
                }
            });
        }
        return next.handle(request);
    };
    JWTInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [AuthService])
    ], JWTInterceptor);
    return JWTInterceptor;
}());
export { JWTInterceptor };
//# sourceMappingURL=jwt.interceptor.js.map