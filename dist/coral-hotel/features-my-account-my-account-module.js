(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-my-account-my-account-module"],{

/***/ "./src/app/features/my-account/my-account.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/my-account/my-account.module.ts ***!
  \**********************************************************/
/*! exports provided: MyAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountModule", function() { return MyAccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-account/my-account.component */ "./src/app/features/my-account/my-account/my-account.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");







var routes = [
    {
        path: "",
        component: _my_account_my_account_component__WEBPACK_IMPORTED_MODULE_3__["MyAccountComponent"]
    }
];
var MyAccountModule = /** @class */ (function () {
    function MyAccountModule() {
    }
    MyAccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_my_account_my_account_component__WEBPACK_IMPORTED_MODULE_3__["MyAccountComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ]
        })
    ], MyAccountModule);
    return MyAccountModule;
}());



/***/ }),

/***/ "./src/app/features/my-account/my-account/my-account.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/features/my-account/my-account/my-account.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content animated fadeIn\">\n    <h2 class=\"text-center mt-5\">BIENVENIDO A TU PERFIL</h2>\n    <div class=\"w-75 form_data align-content-center\">\n        <form class=\"p-3\" [formGroup]=\"updateProfileForm\" [snMarkAsTouched]=\"updateProfileForm\">\n            <div class=\"form-group\">\n                <label>Nombre</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"fullName\" placeholder=\"Tu nombre...\" />\n                <sn-validation-messages [control]=\"updateProfileForm.get('fullName')\"></sn-validation-messages>\n            </div>\n\n            <div class=\"form-group mt-5\">\n                <label>Email</label>\n                <input class=\"email-not-modif form-control\" type=\"text\" formControlName=\"email\" readonly />\n            </div>\n        </form>\n    </div>\n    <div class=\"pt-2 form_butt\">\n        <div>\n            <button (click)=\"updateProfile()\" class=\"m-2\" type=\"submit\"><i class=\"far fa-save\"></i> Actualizar</button>\n        </div>\n        <!-- Se permite borrar al usuario si no tiene reservas pendientes ni reservas procesadas -->\n        <div *ngIf=\"bookingService.bookings.length == 0 && bookingConfirmedService.bookings.length == 0\">\n            <button (click)=\"deleteProfile()\" class=\"m-2\" type=\"submit\"><i class=\"far fa-trash-alt\"></i> Borrar user</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/features/my-account/my-account/my-account.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/features/my-account/my-account/my-account.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 90%; }\n\ndiv.form_butt {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\ninput.email-not-modif {\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  background: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM5L0RvY3VtZW50cy9IYWNrQUJvcy9Qcm95ZWN0byBGaW5hbC9jb3JhbC1ob3RlbC1GUk9OVC9zcmMvYXBwL2ZlYXR1cmVzL215LWFjY291bnQvbXktYWNjb3VudC9teS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxhQUFhO0VBQ2IsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL215LWFjY291bnQvbXktYWNjb3VudC9teS1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbmRpdi5mb3JtX2J1dHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pbnB1dC5lbWFpbC1ub3QtbW9kaWYge1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDA7XG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/my-account/my-account/my-account.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/my-account/my-account/my-account.component.ts ***!
  \************************************************************************/
/*! exports provided: MyAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAccountComponent", function() { return MyAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toast.service */ "./src/app/core/services/toast.service.ts");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony import */ var src_app_core_services_booking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/booking.service */ "./src/app/core/services/booking.service.ts");
/* harmony import */ var src_app_core_services_booking_confirmed_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/services/booking-confirmed.service */ "./src/app/core/services/booking-confirmed.service.ts");









var MyAccountComponent = /** @class */ (function () {
    function MyAccountComponent(fb, router, userService, toastService, modalService, bookingService, bookingConfirmedService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.toastService = toastService;
        this.modalService = modalService;
        this.bookingService = bookingService;
        this.bookingConfirmedService = bookingConfirmedService;
        this.updateProfileForm = this.fb.group({
            fullName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: [""]
        });
    }
    MyAccountComponent.prototype.ngOnInit = function () {
        this.updateProfileForm.setValue({
            fullName: this.userService.currentUser.fullName,
            email: this.userService.currentUser.email
        });
    };
    /**
     * Actualiza el perfil del usuario. El único campo permitido para cambiar es fullName
     */
    MyAccountComponent.prototype.updateProfile = function () {
        var _this = this;
        if (this.updateProfileForm.valid) {
            this.userService
                .updateProfile({ fullName: this.updateProfileForm.value.fullName })
                .subscribe(function () {
                _this.toastService.addToast("Perfil modificado", "Sus datos ha sido modificados con éxito.");
            });
        }
    };
    /**
     * Borra el perfil de usuario
     */
    MyAccountComponent.prototype.deleteProfile = function () {
        var _this = this;
        this.userService
            .deleteProfile(this.userService.currentUser)
            .subscribe(function () {
            _this.modalService.open("Perfil borrado!!", "El perfil se ha borrado con éxito. Si lo desea puede volver a registrarse");
            _this.router.navigate(["/welcome"]);
        });
    };
    MyAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "sn-my-account",
            template: __webpack_require__(/*! ./my-account.component.html */ "./src/app/features/my-account/my-account/my-account.component.html"),
            styles: [__webpack_require__(/*! ./my-account.component.scss */ "./src/app/features/my-account/my-account/my-account.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            src_app_core_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"],
            src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
            src_app_core_services_booking_service__WEBPACK_IMPORTED_MODULE_7__["BookingService"],
            src_app_core_services_booking_confirmed_service__WEBPACK_IMPORTED_MODULE_8__["BookingConfirmedService"]])
    ], MyAccountComponent);
    return MyAccountComponent;
}());



/***/ })

}]);
//# sourceMappingURL=features-my-account-my-account-module.js.map