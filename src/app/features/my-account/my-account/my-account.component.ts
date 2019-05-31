import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/core/services/user.service";

@Component({
  selector: "sn-my-account",
  templateUrl: "./my-account.component.html",
  styleUrls: ["./my-account.component.scss"]
})
export class MyAccountComponent implements OnInit {
  updateProfileForm = this.fb.group({
    fullName: ["", [Validators.required]],
    email: [""]
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.updateProfileForm.setValue({
      fullName: this.userService.currentUser.fullName,
      email: this.userService.currentUser.email
    });
  }

  updateProfile() {
    if (this.updateProfileForm.valid) {
      this.userService
        .updateProfile({ fullName: this.updateProfileForm.value.fullName })
        .subscribe();
    }
  }

  deleteProfile() {
    this.userService.deleteProfile(this.userService.currentUser).subscribe();
  }
}
