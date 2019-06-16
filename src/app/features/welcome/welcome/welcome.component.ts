import { Component } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";
import { UserService } from "src/app/core/services/user.service";
import { ModalService } from "src/app/core/services/modal.service";
import { BookingService } from "src/app/core/services/booking.service";
import { MailValidator } from "../../../shared/validators/mail.validator";
import { MatchPasswordValidator } from "../../../shared/validators/match-password.validator";

@Component({
  selector: "sn-welcome",
  templateUrl: `./welcome.component.html`,
  styleUrls: [`./welcome.component.scss`]
})
export class WelcomeComponents {
  registerForm = this.fb.group(
    {
      fullName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, MailValidator]],
      password: ["", [Validators.required, Validators.minLength(7)]],
      confirmPassword: ["", [Validators.required]]
    },
    { validators: MatchPasswordValidator }
  );

  loginForm = this.fb.group({
    email: ["", [Validators.required, MailValidator]],
    password: ["", [Validators.required, Validators.minLength(7)]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private modalService: ModalService,
    private bookingService: BookingService
  ) {}

  /**
   * Muestra el formulario de Registro en el inicio (deslizando los paneles)
   */
  showRegister() {
    const container = document.getElementById("container");
    container.classList.add("right-panel-active");
  }

  /**
   * Muestra el formulario de Login en inicio (deslizando los paneles)
   */
  showLogin() {
    const container = document.getElementById("container");
    container.classList.remove("right-panel-active");
  }

  /**
   * Petición al back para el LOGIN
   */
  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        () => {
          this.userService.getUserProfile().subscribe();
          this.router.navigate(["/private-area"]);
          this.bookingService
            .getBookings(this.userService.getUserProfile())
            .subscribe();
        },
        () => this.loginForm.get("password").setValue("")
      );
    }
  }

  /**
   * Petición al back para el REGISTER
   */
  register() {
    const { fullName, email, password } = this.registerForm.value;
    if (this.registerForm.valid) {
      this.authService.register({ fullName, email, password }).subscribe(() => {
        this.registerForm.reset();
        this.modalService.open(
          "Gracias por tu registro!!",
          "Te hemos enviado un email con la confirmación. Será donde recibas las comunicaciones sobre tus experiencias"
        );
        this.router.navigate(["/private-area"]);
      });
    }
  }
}
