import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { fromEvent } from "rxjs";
import { debounceTime, map, filter, distinctUntilChanged } from "rxjs/operators";
import { PrivateAreaService } from "src/app/core/services/private-area.service";
var SearchComponent = /** @class */ (function () {
    function SearchComponent(privateAreaService) {
        this.privateAreaService = privateAreaService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.privateAreaService.getExperiences();
        fromEvent(this.inputElement.nativeElement, "keyup")
            .pipe(debounceTime(300), map(function (event) { return event.target.value; }), filter(function (text) { return !text || text.length > 3; }), distinctUntilChanged())
            .subscribe(function (data) {
            _this.privateAreaService.search(data).subscribe();
        });
    };
    tslib_1.__decorate([
        ViewChild("searchText"),
        tslib_1.__metadata("design:type", Object)
    ], SearchComponent.prototype, "inputElement", void 0);
    SearchComponent = tslib_1.__decorate([
        Component({
            selector: "sn-search",
            templateUrl: "./search.component.html",
            styleUrls: ["./search.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [PrivateAreaService])
    ], SearchComponent);
    return SearchComponent;
}());
export { SearchComponent };
//# sourceMappingURL=search.component.js.map