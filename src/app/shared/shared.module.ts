import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ValidationMessagesComponent } from "./components/validation-messages/validation-messages.component";
import { MarkAsTouchedDirective } from "./directives/mark-as-touched.directive";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { DatesFormatPipe } from "./pipes/dates-format.pipe";
import { LoaderComponent } from "./loader/loader.component";

@NgModule({
  declarations: [
    ValidationMessagesComponent,
    MarkAsTouchedDirective,
    NotFoundComponent,
    DatesFormatPipe,
    LoaderComponent
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [
    ValidationMessagesComponent,
    MarkAsTouchedDirective,
    NotFoundComponent,
    DatesFormatPipe,
    LoaderComponent
  ]
})
export class SharedModule {}
