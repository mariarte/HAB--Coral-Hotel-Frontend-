import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ValidationMessagesComponent } from "./components/validation-messages/validation-messages.component";
import { MarkAsTouchedDirective } from "./directives/mark-as-touched.directive";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { DatesFormatPipe } from "./pipes/dates-format.pipe";
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                ValidationMessagesComponent,
                MarkAsTouchedDirective,
                NotFoundComponent,
                DatesFormatPipe
            ],
            imports: [CommonModule, ReactiveFormsModule, RouterModule],
            exports: [
                ValidationMessagesComponent,
                MarkAsTouchedDirective,
                NotFoundComponent,
                DatesFormatPipe
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map