import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponents } from "./about/about.component";

const routes: Routes = [
  {
    path: "",
    component: AboutComponents // apunta al AboutComponents
  }
];

@NgModule({
  declarations: [AboutComponents],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class AboutModule {}
