import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/core/services/user.service";
import { PrivateAreaService } from "src/app/core/services/private-area.service";
// import { BookingService } from "src/app/core/services/booking.service";

@Component({
  selector: "sn-private-area",
  templateUrl: "./private-area.component.html",
  styleUrls: ["./private-area.component.scss"]
})
export class PrivateAreaComponent implements OnInit {
  constructor(
    public userService: UserService,
    // public bookingService: BookingService,
    public privateArea: PrivateAreaService
  ) {}

  ngOnInit() {
    this.privateArea.getExperiences().subscribe();
    // this.bookingService.getOrderCount();
  }
}
