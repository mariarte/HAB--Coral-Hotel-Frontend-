import * as tslib_1 from "tslib";
import { Pipe } from "@angular/core";
var DatesFormatPipe = /** @class */ (function () {
    function DatesFormatPipe() {
    }
    DatesFormatPipe.prototype.transform = function (value, args) {
        if (value) {
            // The + operator returns the numeric representation of the object. So in your particular case,
            // it would appear to be predicating the if on whether or not d is a non-zero number.
            var seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
            var intervals = {
                year: 31536000,
                month: 2592000,
                week: 604800,
                day: 86400,
                hour: 3600,
                minute: 60,
                second: 1
            };
            var counter = void 0;
            for (var _i = 0, _a = Object.keys(intervals); _i < _a.length; _i++) {
                var interval = _a[_i];
                counter = Math.floor(seconds / intervals[interval]);
                if (counter > 0) {
                    if (counter === 1) {
                        return counter + " " + interval + " ago"; // singular (1 day ago)
                    }
                    else {
                        return counter + " " + interval + "s ago"; // plural (2 days ago)
                    }
                }
            }
        }
        return value;
    };
    DatesFormatPipe = tslib_1.__decorate([
        Pipe({
            name: "datesFormat"
        })
    ], DatesFormatPipe);
    return DatesFormatPipe;
}());
export { DatesFormatPipe };
//# sourceMappingURL=dates-format.pipe.js.map