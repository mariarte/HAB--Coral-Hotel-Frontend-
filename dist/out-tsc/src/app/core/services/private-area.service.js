import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
var PrivateAreaService = /** @class */ (function () {
    function PrivateAreaService(http) {
        this.http = http;
    }
    PrivateAreaService.prototype.getExperiences = function () {
        var _this = this;
        return this.http.get(environment.apiBaseUrl + "/experiences").pipe(tap(function (experiences) {
            return (_this.experiences = experiences.map(function (experience) {
                experience.quantity = 1;
                return experience;
            }));
        }));
    };
    PrivateAreaService.prototype.search = function (experience) {
        var _this = this;
        return this.http
            .get(environment.apiBaseUrl + "/experiences/" + experience)
            .pipe(tap(function (experiences) {
            return (_this.experiences = experiences.map(function (experience) {
                experience.quantity = 1;
                return experience;
            }));
        }));
    };
    PrivateAreaService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PrivateAreaService);
    return PrivateAreaService;
}());
export { PrivateAreaService };
//# sourceMappingURL=private-area.service.js.map