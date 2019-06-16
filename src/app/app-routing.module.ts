import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./layout/main-layout/main-layout.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { AuthGuard } from "./core/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "welcome",
    pathMatch: "full"
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
        loadChildren:
          "./features/private-area/private-area.module#PrivateAreaModule"
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
        loadChildren:
          "./features/booking-confirmed/booking-confirmed.module#BookingConfirmedModule"
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
