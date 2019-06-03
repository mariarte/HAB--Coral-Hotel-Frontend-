import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUserProfile = function () {
        var _this = this;
        return this.http
            .get(environment.apiBaseUrl + "/user/profile")
            .pipe(tap(function (user) { return (_this.currentUser = user); }));
    };
    UserService.prototype.updateProfile = function (profile) {
        var _this = this;
        return this.http.put(environment.apiBaseUrl + "/user", profile).pipe(tap(function () {
            _this.currentUser = tslib_1.__assign({}, _this.currentUser, profile);
        }));
    };
    UserService.prototype.deleteProfile = function (profile) {
        var _this = this;
        return this.http
            .delete(environment.apiBaseUrl + "/user/delete")
            .pipe(tap(function (user) { return (_this.currentUser = user); }));
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: "root" // Obligatorio!! Generar una unica instancia
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map