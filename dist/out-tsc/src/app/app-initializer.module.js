import * as tslib_1 from "tslib";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { UserService } from "./core/services/user.service";
import { BookingService } from "./core/services/booking.service";
// import { NotificationService } from './core/services/notification.service';
export function getInitialData(userService, bookingService) {
    var _this = this;
    return function () {
        if (localStorage.getItem("auth")) {
            return new Promise(function (resolve) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var error_1;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, userService.getUserProfile().toPromise()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, bookingService
                                    .getBookings(userService.currentUser.idUser)
                                    .toPromise()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, resolve()];
                        case 3:
                            error_1 = _a.sent();
                            return [2 /*return*/, resolve(error_1)];
                        case 4: return [2 /*return*/];
                    }
                });
            }); });
        }
        return Promise.resolve();
    };
}
var AppInitializerModule = /** @class */ (function () {
    function AppInitializerModule() {
    }
    AppInitializerModule = tslib_1.__decorate([
        NgModule({
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: getInitialData,
                    deps: [UserService, BookingService],
                    //   deps: [UserService, NotificationService],
                    multi: true
                }
            ]
        })
    ], AppInitializerModule);
    return AppInitializerModule;
}());
export { AppInitializerModule };
//# sourceMappingURL=app-initializer.module.js.map