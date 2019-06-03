import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth.service";
import { UserService } from "src/app/core/services/user.service";
import { ModalService } from "src/app/core/services/modal.service";
import { MailValidator } from "../../../shared/validators/mail.validator";
import { MatchPasswordValidator } from "../../../shared/validators/match-password.validator";
var WelcomeComponents = /** @class */ (function () {
    function WelcomeComponents(fb, router, authService, userService, modalService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.modalService = modalService;
        this.registerForm = this.fb.group({
            fullName: ["", [Validators.required, Validators.minLength(3)]],
            email: ["", [Validators.required, MailValidator]],
            password: ["", [Validators.required, Validators.minLength(7)]],
            confirmPassword: ["", [Validators.required]]
        }, { validators: MatchPasswordValidator });
        this.loginForm = this.fb.group({
            email: ["", [Validators.required, MailValidator]],
            password: ["", [Validators.required, Validators.minLength(7)]]
        });
    }
    // Muestra el formulario de Registro
    WelcomeComponents.prototype.showRegister = function () {
        var container = document.getElementById("container");
        container.classList.add("right-panel-active");
    };
    // Muestra el formulario de Login
    WelcomeComponents.prototype.showLogin = function () {
        var container = document.getElementById("container");
        container.classList.remove("right-panel-active");
    };
    // Llamada al back en el LOGIN
    WelcomeComponents.prototype.login = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value).subscribe(function () {
                _this.userService.getUserProfile().subscribe();
                console.log(_this.authService, _this.userService);
                _this.router.navigate(["/private-area"]);
            }, function () { return _this.loginForm.get("password").setValue(""); });
        }
    };
    // Llamada al back en el REGISTRO
    WelcomeComponents.prototype.register = function () {
        var _this = this;
        var _a = this.registerForm.value, fullName = _a.fullName, email = _a.email, password = _a.password;
        if (this.registerForm.valid) {
            this.authService.register({ fullName: fullName, email: email, password: password }).subscribe(function () {
                _this.registerForm.reset();
                _this.modalService.open("Gracias por tu registro!!", "Te hemos enviado un email con la confirmación. Será donde recibas las comunicaciones sobre tus experiencias");
                _this.router.navigate(["/private-area"]);
            });
        }
    };
    WelcomeComponents = tslib_1.__decorate([
        Component({
            selector: "sn-welcome",
            templateUrl: "./welcome.component.html",
            styleUrls: ["./welcome.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router,
            AuthService,
            UserService,
            ModalService])
    ], WelcomeComponents);
    return WelcomeComponents;
}());
export { WelcomeComponents };
//# sourceMappingURL=welcome.component.js.map