import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/core/services/user.service";
import { ToastService } from "src/app/core/services/toast.service";
import { ModalService } from "src/app/core/services/modal.service";

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastService: ToastService,
    private modalService: ModalService
  ) {}

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
        .subscribe(() => {
          this.toastService.addToast(
            "Perfil modificado",
            "Sus datos ha sido modificados con éxito."
          );
        });
    }
  }

  deleteProfile() {
    this.userService
      .deleteProfile(this.userService.currentUser)
      .subscribe(() => {
        this.modalService.open(
          "Perfil borrado!!",
          "El perfil se ha borrado con éxito. Si lo desea puede volver a registrarse"
        );
        this.router.navigate(["/welcome"]);
      });
  }
}
