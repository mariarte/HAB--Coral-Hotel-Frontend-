import * as tslib_1 from "tslib";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { Router } from "@angular/router";
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.authInfo = JSON.parse(localStorage.getItem("auth"));
    }
    AuthService.prototype.login = function (_a) {
        var _this = this;
        var email = _a.email, password = _a.password;
        console.log(this.authInfo); //muestro el token sin JWT
        return this.http
            .post(environment.apiBaseUrl + "/account/login", {
            email: email,
            password: password
        })
            .pipe(tap(function (info) {
            _this.authInfo = info;
            localStorage.setItem("auth", JSON.stringify(info));
        }));
    };
    AuthService.prototype.register = function (_a) {
        var fullName = _a.fullName, email = _a.email, password = _a.password;
        return this.http.post(environment.apiBaseUrl + "/account", {
            fullName: fullName,
            email: email,
            password: password
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem("auth");
        this.authInfo = null;
        location.href = "/welcome";
        // this.router.navigate(["/welcome"]);
    };
    AuthService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Router])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map