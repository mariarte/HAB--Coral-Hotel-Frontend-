import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookingComponent } from "./booking/booking.component";
import { Routes, RouterModule } from "@angular/router";
import { LayoutModule } from "../../layout/layout.module";
import { SharedModule } from "src/app/shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: BookingComponent
  }
];

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LayoutModule,
    SharedModule
  ]
})
export class BookingModule {}
