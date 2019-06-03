import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { timer, Subject } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
var valorReloj = /** @class */ (function () {
    function valorReloj() {
    }
    valorReloj = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        })
    ], valorReloj);
    return valorReloj;
}());
export { valorReloj };
var ClockService = /** @class */ (function () {
    function ClockService() {
        this.infofecha$ = new Subject();
        this.clock = timer(0, 1000).pipe(map(function (t) { return new Date(); }), shareReplay(1));
    }
    ClockService.prototype.getInfoReloj = function () {
        var _this = this;
        this.clock.subscribe(function (t) {
            _this.hours = t.getHours() % 12;
            _this.hours = _this.hours ? _this.hours : 12;
            _this.vr = {
                hora: _this.hours,
                minutos: t.getMinutes() < 10
                    ? "0" + t.getMinutes()
                    : t.getMinutes().toString(),
                ampm: t.getHours() > 11 ? "PM" : "AM",
                diaymes: t
                    .toLocaleString("es-MX", { day: "2-digit", month: "long" })
                    .replace(".", "")
                    .replace("-", " "),
                diadesemana: t
                    .toLocaleString("es-MX", { weekday: "long" })
                    .replace(".", ""),
                segundo: t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds().toString()
            };
            _this.infofecha$.next(_this.vr);
        });
        return this.infofecha$.asObservable();
    };
    return ClockService;
}());
export { ClockService };
//# sourceMappingURL=clock.service.js.map