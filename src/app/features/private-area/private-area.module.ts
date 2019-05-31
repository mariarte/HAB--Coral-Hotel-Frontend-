import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrivateAreaComponent } from "./private-area/private-area.component";
import { Routes, RouterModule } from "@angular/router";
import { LayoutModule } from "../../layout/layout.module";

const routes: Routes = [
  {
    path: "",
    component: PrivateAreaComponent
  }
];

@NgModule({
  declarations: [PrivateAreaComponent],
  imports: [CommonModule, RouterModule.forChild(routes), LayoutModule]
})
export class PrivateAreaModule {}
