import { Component } from "@angular/core";
import { ModalService } from "src/app/core/services/modal.service";

@Component({
  selector: "sn-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent {
  constructor(public modalService: ModalService) {}

  ngOnInit() {}
}
