import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
    }
    OrderService.prototype.insertOrder = function (_a) {
        var experience = _a.experience;
        return this.http.post(environment.apiBaseUrl + "/order", {
            idExperience: experience.idExperience,
            units: experience.quantity,
            comments: experience.comments
        });
    };
    OrderService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], OrderService);
    return OrderService;
}());
export { OrderService };
//# sourceMappingURL=order.service.js.map