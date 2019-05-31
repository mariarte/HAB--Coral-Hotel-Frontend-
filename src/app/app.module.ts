import { BrowserModule } from "@angular/platform-browser"; // necesario para que angular trabaje en el navegador
import { NgModule } from "@angular/core";
import * as $ from "jquery";

import { AppRoutingModule } from "./app-routing.module"; // importo un modulo de routing
import { AppComponent } from "./app.component";
import { LayoutModule } from "./layout/layout.module";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { AppInitializerModule } from "./app-initializer.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppInitializerModule,
    CoreModule,
    LayoutModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent] // donde arranca mi aplicacion
})
export class AppModule {}
