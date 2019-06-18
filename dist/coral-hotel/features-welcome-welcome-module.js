(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-welcome-welcome-module"],{

/***/ "./src/app/features/welcome/welcome.module.ts":
/*!****************************************************!*\
  !*** ./src/app/features/welcome/welcome.module.ts ***!
  \****************************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/features/welcome/welcome/welcome.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");







var routes = [
    {
        path: "",
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponents"]
    }
];
var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponents"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ]
        })
    ], WelcomeModule);
    return WelcomeModule;
}());



/***/ }),

/***/ "./src/app/features/welcome/welcome/welcome.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/features/welcome/welcome/welcome.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container animated fadeIn\" id=\"container\">\n    <div class=\"form-container sign-up-container\">\n        <form [formGroup]=\"registerForm\" [snMarkAsTouched]=\"registerForm\" (ngSubmit)=\"register()\">\n            <h1 class=\"mb-4\">Alta cliente</h1>\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" formControlName=\"fullName\" placeholder=\"Nombre \" />\n                <sn-validation-messages [control]=\"registerForm.get('fullName')\"></sn-validation-messages>\n            </div>\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" formControlName=\"email\" placeholder=\"Email\" />\n                <sn-validation-messages [control]=\"registerForm.get('email')\"></sn-validation-messages>\n            </div>\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"password\" formControlName=\"password\" placeholder=\"Password\" />\n                <sn-validation-messages [control]=\"registerForm.get('password')\"></sn-validation-messages>\n            </div>\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"password\" formControlName=\"confirmPassword\" placeholder=\"Confirma tu contraseña\" />\n                <sn-validation-messages [control]=\"registerForm.get('confirmPassword')\" [group]=\"registerForm\"></sn-validation-messages>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"button m-3\">\n                    <i class=\"far fa-id-badge\"></i> Registrar\n                </button>\n            </div>\n        </form>\n    </div>\n    <div class=\"form-container sign-in-container \">\n        <form [formGroup]=\"loginForm\" [snMarkAsTouched]=\"loginForm\" (ngSubmit)=\"login()\">\n            <h1 class=\"mb-4\">Iniciar Sesión</h1>\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"text\" formControlName=\"email\" placeholder=\"Email \" />\n                <sn-validation-messages [control]=\"loginForm.get('email')\"></sn-validation-messages>\n            </div>\n            <div class=\"form-group\">\n                <input class=\"form-control\" type=\"password\" formControlName=\"password\" placeholder=\"Password \" />\n                <sn-validation-messages [control]=\"loginForm.get('password')\"></sn-validation-messages>\n            </div>\n            <div class=\"form-group\">\n                <button class=\"button m-3\">\n                <i class=\"fas fa-sign-in-alt\"></i> Acceder\n                </button>\n            </div>\n        </form>\n    </div>\n    <div class=\"overlay-container \">\n        <div class=\"overlay \">\n            <div class=\"overlay-panel overlay-left \">\n                <h1>Bienvenid@ de nuevo!</h1>\n                <p>Para conectarte con nosotros por favor introduce tus datos</p>\n                <button (click)=\"showLogin()\" class=\"ghost \" id=\"signIn \">\n                    <i class=\"fas fa-sign-in-alt\"></i> Log In\n                </button>\n            </div>\n            <div class=\"overlay-panel overlay-right \">\n                <h1>Hola, tu primera vez?</h1>\n                <p>Introduce tus datos para darte de alta con nosotros</p>\n                <button (click)=\"showRegister()\" class=\"ghost \" id=\"signUp \">\n                    <i class=\"far fa-id-badge\"></i> Registro\n                </button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/features/welcome/welcome/welcome.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/features/welcome/welcome/welcome.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background: #f6f5f7;\n  display: block;\n  align-items: center;\n  flex-direction: column;\n  font-family: \"Montserrat\", sans-serif;\n  height: 100%; }\n\n.container {\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  position: relative;\n  height: 80%;\n  width: 90%;\n  max-height: 520px;\n  max-width: 800px;\n  min-height: 520px;\n  min-width: 800px; }\n\n.container .button-gradient:before {\n    box-shadow: 0 0 10px 10px rgba(255, 111, 97, 0.25);\n    background-color: rgba(255, 111, 97, 0.25); }\n\nh1 {\n  font-weight: bold;\n  margin: 1px; }\n\nh2 {\n  text-align: center; }\n\np {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 20px;\n  letter-spacing: 0.7px;\n  margin: 20px 0 30px; }\n\nbutton.ghost {\n  -webkit-transform: translateZ(40px);\n          transform: translateZ(40px);\n  background-color: transparent;\n  border-color: #ffffff; }\n\nbutton.ghost:hover {\n    border-color: #000;\n    -webkit-transform: translateZ(55px);\n            transform: translateZ(55px); }\n\nbutton.ghost:hover:before {\n      border-color: #000;\n      -webkit-transform: translateZ(-55px);\n              transform: translateZ(-55px); }\n\nbutton.ghost:active {\n    -webkit-transform: translateZ(20px);\n            transform: translateZ(20px);\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9); }\n\nbutton.ghost:active:before {\n      -webkit-transform: translateZ(-20px);\n              transform: translateZ(-20px);\n      top: 12px; }\n\nbutton.ghost:focus {\n    outline: none; }\n\nform {\n  background-color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 50px;\n  height: 100%;\n  text-align: center; }\n\ninput {\n  background-color: #eee;\n  border: none; }\n\ninput::-webkit-input-placeholder {\n  font-size: 12px; }\n\ninput,\ntextarea {\n  transition: all 0.8s ease-out; }\n\n.form-container {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  transition: all 0.6s ease-in-out; }\n\n.sign-in-container {\n  /*Formulario de alta de cliente*/\n  left: 0;\n  width: 50%;\n  z-index: 2; }\n\n.container.right-panel-active .sign-in-container {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%); }\n\n.sign-up-container {\n  /*Formulario de iniciar sesion*/\n  left: 0;\n  width: 50%;\n  opacity: 0;\n  z-index: 1; }\n\n.container.right-panel-active .sign-up-container {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  opacity: 1;\n  z-index: 5;\n  -webkit-animation: show 0.6s;\n          animation: show 0.6s; }\n\n@-webkit-keyframes show {\n  0%,\n  49.99% {\n    opacity: 0;\n    z-index: 1; }\n  50%,\n  100% {\n    opacity: 1;\n    z-index: 5; } }\n\n@keyframes show {\n  0%,\n  49.99% {\n    opacity: 0;\n    z-index: 1; }\n  50%,\n  100% {\n    opacity: 1;\n    z-index: 5; } }\n\n.overlay-container {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n  z-index: 100; }\n\n.container.right-panel-active .overlay-container {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%); }\n\n.overlay {\n  background: #ff416c;\n  background: linear-gradient(to right, #ff416c, #ff6f61);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 0 0;\n  color: #ffffff;\n  position: relative;\n  left: -100%;\n  height: 100%;\n  width: 200%;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out; }\n\n.container.right-panel-active .overlay {\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%); }\n\n.overlay-panel {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 40px;\n  text-align: center;\n  top: 0;\n  height: 100%;\n  width: 50%;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out; }\n\n.overlay-left {\n  -webkit-transform: translateX(-20%);\n          transform: translateX(-20%); }\n\n.container.right-panel-active .overlay-left {\n  -webkit-transform: translateX(0);\n          transform: translateX(0); }\n\n.overlay-right {\n  right: 0;\n  -webkit-transform: translateX(0);\n          transform: translateX(0); }\n\n.container.right-panel-active .overlay-right {\n  -webkit-transform: translateX(20%);\n          transform: translateX(20%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM5L0RvY3VtZW50cy9IYWNrQUJvcy9Qcm95ZWN0byBGaW5hbC9jb3JhbC1ob3RlbC1GUk9OVC9zcmMvYXBwL2ZlYXR1cmVzL3dlbGNvbWUvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHFDQUFxQztFQUNyQyxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw0RUFBNEU7RUFDNUUsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBVnBCO0lBYVksa0RBQXNDO0lBQ3RDLDBDQUE4QixFQUFBOztBQUsxQztFQUNJLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBRUksbUNBQThCO1VBQTlCLDJCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IscUJBQXFCLEVBQUE7O0FBSnpCO0lBTVEsa0JBQWtCO0lBQ2xCLG1DQUFxQztZQUFyQywyQkFBcUMsRUFBQTs7QUFQN0M7TUFTWSxrQkFBa0I7TUFDbEIsb0NBQXdDO2NBQXhDLDRCQUF3QyxFQUFBOztBQVZwRDtJQWNRLG1DQUFnQztZQUFoQywyQkFBZ0M7SUFDaEMsNkJBQXFCO1lBQXJCLHFCQUFxQixFQUFBOztBQWY3QjtNQWlCWSxvQ0FBbUM7Y0FBbkMsNEJBQW1DO01BQ25DLFNBQVMsRUFBQTs7QUFsQnJCO0lBc0JRLGFBQWEsRUFBQTs7QUFJckI7RUFDSSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxlQUFlLEVBQUE7O0FBSW5COztFQU1JLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtFQUNaLGdDQUFnQyxFQUFBOztBQUdwQztFQUNJLGdDQUFBO0VBQ0EsT0FBTztFQUNQLFVBQVU7RUFDVixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxtQ0FBMkI7VUFBM0IsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksK0JBQUE7RUFDQSxPQUFPO0VBQ1AsVUFBVTtFQUNWLFVBQVU7RUFDVixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixVQUFVO0VBQ1YsNEJBQW9CO1VBQXBCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJOztJQUVJLFVBQVU7SUFDVixVQUFVLEVBQUE7RUFFZDs7SUFFSSxVQUFVO0lBQ1YsVUFBVSxFQUFBLEVBQUE7O0FBVGxCO0VBQ0k7O0lBRUksVUFBVTtJQUNWLFVBQVUsRUFBQTtFQUVkOztJQUVJLFVBQVU7SUFDVixVQUFVLEVBQUEsRUFBQTs7QUFJbEI7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw4Q0FBc0M7RUFBdEMsc0NBQXNDO0VBQXRDLDBFQUFzQztFQUN0QyxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksb0NBQTRCO1VBQTVCLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLG1CQUFtQjtFQUVuQix1REFBdUQ7RUFDdkQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDhDQUFzQztFQUF0QyxzQ0FBc0M7RUFBdEMsMEVBQXNDLEVBQUE7O0FBRzFDO0VBQ0ksa0NBQTBCO1VBQTFCLDBCQUEwQixFQUFBOztBQUc5QjtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sWUFBWTtFQUNaLFVBQVU7RUFDVixnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDhDQUFzQztFQUF0QyxzQ0FBc0M7RUFBdEMsMEVBQXNDLEVBQUE7O0FBRzFDO0VBQ0ksbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLGdDQUF3QjtVQUF4Qix3QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxRQUFRO0VBQ1IsZ0NBQXdCO1VBQXhCLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLGtDQUEwQjtVQUExQiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3dlbGNvbWUvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGJhY2tncm91bmQ6ICNmNmY1Zjc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC1oZWlnaHQ6IDUyMHB4O1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWluLWhlaWdodDogNTIwcHg7XG4gICAgbWluLXdpZHRoOiA4MDBweDtcbiAgICAuYnV0dG9uLWdyYWRpZW50IHtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMTBweCByZ2JhKCNmZjZmNjEsIDAuMjUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZmY2ZjYxLCAwLjI1KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMXB4O1xufVxuXG5oMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC43cHg7XG4gICAgbWFyZ2luOiAyMHB4IDAgMzBweDtcbn1cblxuYnV0dG9uLmdob3N0IHtcbiAgICAkaGVpZ2h0OiA0MHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigkaGVpZ2h0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCRoZWlnaHQgKyAxNXB4KTtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0oJGhlaWdodCArIDE1cHgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigkaGVpZ2h0LzIpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtKCRoZWlnaHQvMikpO1xuICAgICAgICAgICAgdG9wOiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbn1cblxuZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW5wdXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4vLyBUcmFuc2ljacOzbiBhbCBjYW1iaWFyIGRlIGlucHV0XG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2Utb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2Utb3V0O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZS1vdXQ7XG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2Utb3V0O1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2lnbi1pbi1jb250YWluZXIge1xuICAgIC8qRm9ybXVsYXJpbyBkZSBhbHRhIGRlIGNsaWVudGUqL1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAuc2lnbi1pbi1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cblxuLnNpZ24tdXAtY29udGFpbmVyIHtcbiAgICAvKkZvcm11bGFyaW8gZGUgaW5pY2lhciBzZXNpb24qL1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5zaWduLXVwLWNvbnRhaW5lciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgei1pbmRleDogNTtcbiAgICBhbmltYXRpb246IHNob3cgMC42cztcbn1cblxuQGtleWZyYW1lcyBzaG93IHtcbiAgICAwJSxcbiAgICA0OS45OSUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cbiAgICA1MCUsXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgfVxufVxuXG4ub3ZlcmxheS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogNTAlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG5cbi5vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmY0MTZjO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmY0MTZjLCAjZmY2ZjYxKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjQxNmMsICNmZjZmNjEpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjAwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jb250YWluZXIucmlnaHQtcGFuZWwtYWN0aXZlIC5vdmVybGF5IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbn1cblxuLm92ZXJsYXktcGFuZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5vdmVybGF5LWxlZnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAlKTtcbn1cblxuLmNvbnRhaW5lci5yaWdodC1wYW5lbC1hY3RpdmUgLm92ZXJsYXktbGVmdCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG4ub3ZlcmxheS1yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xufVxuXG4uY29udGFpbmVyLnJpZ2h0LXBhbmVsLWFjdGl2ZSAub3ZlcmxheS1yaWdodCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/features/welcome/welcome/welcome.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/welcome/welcome/welcome.component.ts ***!
  \***************************************************************/
/*! exports provided: WelcomeComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponents", function() { return WelcomeComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/modal.service */ "./src/app/core/services/modal.service.ts");
/* harmony import */ var src_app_core_services_booking_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/booking.service */ "./src/app/core/services/booking.service.ts");
/* harmony import */ var _shared_validators_mail_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/validators/mail.validator */ "./src/app/shared/validators/mail.validator.ts");
/* harmony import */ var _shared_validators_match_password_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/validators/match-password.validator */ "./src/app/shared/validators/match-password.validator.ts");










var WelcomeComponents = /** @class */ (function () {
    function WelcomeComponents(fb, router, authService, userService, modalService, bookingService) {
        this.fb = fb;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.modalService = modalService;
        this.bookingService = bookingService;
        this.registerForm = this.fb.group({
            fullName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_validators_mail_validator__WEBPACK_IMPORTED_MODULE_8__["MailValidator"]]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7)]],
            confirmPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, { validators: _shared_validators_match_password_validator__WEBPACK_IMPORTED_MODULE_9__["MatchPasswordValidator"] });
        this.loginForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_validators_mail_validator__WEBPACK_IMPORTED_MODULE_8__["MailValidator"]]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7)]]
        });
    }
    /**
     * Muestra el formulario de Registro en el inicio (deslizando los paneles)
     */
    WelcomeComponents.prototype.showRegister = function () {
        var container = document.getElementById("container");
        container.classList.add("right-panel-active");
    };
    /**
     * Muestra el formulario de Login en inicio (deslizando los paneles)
     */
    WelcomeComponents.prototype.showLogin = function () {
        var container = document.getElementById("container");
        container.classList.remove("right-panel-active");
    };
    /**
     * Petición al back para el LOGIN
     */
    WelcomeComponents.prototype.login = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value).subscribe(function () {
                _this.userService.getUserProfile().subscribe();
                _this.router.navigate(["/private-area"]);
                _this.bookingService
                    .getBookings(_this.userService.getUserProfile())
                    .subscribe();
            }, function () { return _this.loginForm.get("password").setValue(""); });
        }
    };
    /**
     * Petición al back para el REGISTER
     */
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
    WelcomeComponents = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "sn-welcome",
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/features/welcome/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/features/welcome/welcome/welcome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            src_app_core_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"],
            src_app_core_services_booking_service__WEBPACK_IMPORTED_MODULE_7__["BookingService"]])
    ], WelcomeComponents);
    return WelcomeComponents;
}());



/***/ }),

/***/ "./src/app/shared/validators/mail.validator.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/validators/mail.validator.ts ***!
  \*****************************************************/
/*! exports provided: MailValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailValidator", function() { return MailValidator; });
function MailValidator(control) {
    var EMAIL_REGEX = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    if (control.value) {
        if (control.value.indexOf("@") === -1) {
            return { missingArroba: true };
        }
        if (!EMAIL_REGEX.test(control.value)) {
            return { malformedMail: true };
        }
    }
    return null;
}


/***/ }),

/***/ "./src/app/shared/validators/match-password.validator.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/validators/match-password.validator.ts ***!
  \***************************************************************/
/*! exports provided: MatchPasswordValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPasswordValidator", function() { return MatchPasswordValidator; });
function MatchPasswordValidator(group) {
    var password = group.get("password").value;
    var confirmPassword = group.get("confirmPassword").value;
    if (password !== confirmPassword) {
        return { passwordMismatch: true };
    }
    return null;
}


/***/ })

}]);
//# sourceMappingURL=features-welcome-welcome-module.js.map