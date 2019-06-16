import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "src/app/core/services/user.service";
import { ToastService } from "src/app/core/services/toast.service";
import { ModalService } from "src/app/core/services/modal.service";
import { BookingService } from "src/app/core/services/booking.service";
import { BookingConfirmedService } from "src/app/core/services/booking-confirmed.service";

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
    private modalService: ModalService,
    public bookingService: BookingService,
    public bookingConfirmedService: BookingConfirmedService
  ) {}

  ngOnInit() {
    this.updateProfileForm.setValue({
      fullName: this.userService.currentUser.fullName,
      email: this.userService.currentUser.email
    });
  }

  /**
   * Actualiza el perfil del usuario. El único campo permitido para cambiar es fullName
   */
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

  /**
   * Borra el perfil de usuario
   */
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
