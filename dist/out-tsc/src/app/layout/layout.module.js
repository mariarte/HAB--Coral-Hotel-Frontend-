import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponents } from "./header/header.component";
import { FooterComponents } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./main-layout/main-layout.component";
import { ModalComponent } from "./modal/modal.component";
import { SharedModule } from "../shared/shared.module";
import { CardComponent } from "./card/card.component";
import { NavComponent } from "./nav/nav.component";
import { ToastComponent } from "./toast/toast.component";
import { SearchComponent } from "./search/search.component";
import { BadgeComponent } from "./badge/badge.component";
import { ClockComponent } from "./clock/clock.component";
import { FormsModule } from "@angular/forms";
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                HeaderComponents,
                FooterComponents,
                MainLayoutComponent,
                ModalComponent,
                CardComponent,
                NavComponent,
                ToastComponent,
                SearchComponent,
                BadgeComponent,
                ClockComponent
            ],
            imports: [CommonModule, RouterModule, SharedModule, FormsModule],
            exports: [
                HeaderComponents,
                FooterComponents,
                MainLayoutComponent,
                ModalComponent,
                ToastComponent,
                CardComponent,
                SearchComponent,
                BadgeComponent
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());
export { LayoutModule };
//# sourceMappingURL=layout.module.js.map