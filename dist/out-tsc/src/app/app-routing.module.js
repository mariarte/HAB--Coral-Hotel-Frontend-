import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { AuthGuard } from "./core/guards/auth.guard";
var routes = [
    {
        path: "",
        redirectTo: "welcome",
        pathMatch: "full" // matchea ese path
    },
    {
        path: "welcome",
        loadChildren: "./features/welcome/welcome.module#WelcomeModule"
    },
    {
        path: "",
        component: MainLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "private-area",
                loadChildren: "./features/private-area/private-area.module#PrivateAreaModule"
            },
            {
                path: "my-account",
                loadChildren: "./features/my-account/my-account.module#MyAccountModule"
            },
            {
                path: "booking",
                loadChildren: "./features/booking/booking.module#BookingModule"
            },
            {
                path: "booking-confirmed",
                loadChildren: "./features/booking-confirmed/booking-confirmed.module#BookingConfirmedModule"
            }
        ]
    },
    {
        path: "about",
        loadChildren: "./features/about/about.module#AboutModule"
    },
    {
        path: "**",
        component: NotFoundComponent
    }
]; // es el tipo de datos en typescript
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule] // aqui exporto el modulo tal cual lo he creado en el imports anterior
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map