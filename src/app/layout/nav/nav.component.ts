import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "sn-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public userService: UserService
  ) {}

  ngOnInit() {}
}
