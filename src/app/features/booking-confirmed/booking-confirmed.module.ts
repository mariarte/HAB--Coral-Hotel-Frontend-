import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookingConfirmedComponent } from "./booking-confirmed/booking-confirmed.component";
import { Routes, RouterModule } from "@angular/router";
import { LayoutModule } from "../../layout/layout.module";
import { SharedModule } from "src/app/shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: BookingConfirmedComponent
  }
];

@NgModule({
  declarations: [BookingConfirmedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    SharedModule
  ]
})
export class BookingConfirmedModule {}
