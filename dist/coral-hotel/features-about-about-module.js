(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-about-about-module"],{

/***/ "./src/app/features/about/about.module.ts":
/*!************************************************!*\
  !*** ./src/app/features/about/about.module.ts ***!
  \************************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/features/about/about/about.component.ts");





var routes = [
    {
        path: "",
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponents"]
    }
];
var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponents"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/features/about/about/about.component.html":
/*!***********************************************************!*\
  !*** ./src/app/features/about/about/about.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content container animated fadeIn\">\n    <div class=\" titles mb-0\">\n        <h1 class=\"pr-2\">{{ title }}</h1>\n        <h2>{{ presentation }}</h2>\n        <h1>{{ name }}</h1>\n    </div>\n\n    <div class=\"post-itdiv\">\n        <ul>\n            <li>\n                <a>\n                    <h2 class=\"postit\">{{ descriptionTitle }}</h2>\n                    <p class=\"postit \">{{ description }}</p>\n                </a>\n            </li>\n            <li>\n                <a>\n                    <h2 class=\"postit\">{{ projectTitle }}</h2>\n                    <p class=\"postit \">{{ project }}</p>\n                </a>\n            </li>\n        </ul>\n        <img class=\"hab\" src=\"../../../../assets/images/hab.png\" alt=\"HAB Logo\" />\n    </div>\n\n    <div class=\"social-buttons\">\n        <h2>{{ textLinks }}</h2>\n        <div *ngFor=\"let link of links\">\n            <a target=\"_blank\" href=\"{{ link.URL }} \" class=\"{{ link.class }}\">\n                <span class=\"social-button__inner\">\n          <i class=\"{{ link.icon }} \"></i>\n        </span>\n            </a>\n        </div>\n    </div>\n\n    <hr />\n\n    <div class=\"social-buttons\">\n        <h2>{{ contact.description }}</h2>\n        <div>\n            <a href=\"mailto:{{ contact.email }}?Subject=Hola! \" class=\"{{ contact.class }}\">\n                <span class=\"social-button__inner\">\n          <i class=\" {{ contact.icon }} \"> </i>\n        </span>\n            </a>\n        </div>\n    </div>\n\n    <div class=\"programmer\">\n        <img class=\"programmer_img\" src=\"../../../../assets/images/logo_programadora.png\" alt=\"Developer girl\" />\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/features/about/about/about.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/features/about/about/about.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Reenie+Beanie\");\n:host {\n  background: #f6f5f7;\n  height: 100%;\n  display: flex;\n  justify-content: center; }\n.container {\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  position: relative;\n  overflow: hidden;\n  width: 90%;\n  height: 73vh;\n  max-width: 800px;\n  min-width: 800px;\n  margin-bottom: 1rem; }\ndiv.titles {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center; }\ndiv.programmer {\n  position: relative;\n  top: -290px;\n  left: 75px;\n  z-index: 1; }\ndiv.post-itdiv {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0; }\nh1 {\n  font-size: 2.5rem;\n  font-weight: bolder; }\nh2 {\n  margin: 28px;\n  font-size: 28px; }\ndiv > i {\n  font-size: 7rem; }\n/*Estilo post-it*/\nul,\nli {\n  list-style: none; }\nul {\n  padding-left: 105px;\n  margin-bottom: 60px; }\nul li a {\n  text-decoration: none;\n  color: #000;\n  background: #ffe4e2;\n  display: block;\n  height: 12em;\n  width: 12em;\n  /* Firefox */\n  /* Safari+Chrome */\n  /* Opera */\n  box-shadow: 5px 5px 7px rgba(33, 33, 33, 0.7);\n  -webkit-transform: rotate(-6deg);\n  -o-transform: rotate(-6deg);\n  -moz-transform: rotate(-6deg); }\nul li:nth-child(even) a {\n  -o-transform: rotate(4deg);\n  -webkit-transform: rotate(4deg);\n  -moz-transform: rotate(4deg);\n  position: relative;\n  top: 5px; }\nul li a:hover,\nul li a:focus {\n  box-shadow: 10px 10px 7px rgba(0, 0, 0, 0.7);\n  -webkit-transform: scale(1.7);\n  -moz-transform: scale(1.7);\n  -o-transform: scale(1.7);\n  transition: all 0.4s ease-out;\n  position: relative;\n  z-index: 5; }\nul li {\n  margin: 0 1.5em;\n  float: left; }\nul li h2 {\n  font-family: \"Montserrat\", arial, sans-se;\n  font-size: 21px;\n  font-weight: 800;\n  text-align: center;\n  padding-top: 15px; }\np.postit {\n  font-family: \"Reenie Beanie\", arial, sans-se;\n  font-size: 18px;\n  margin: 0;\n  padding: 0 20px 10px 20px; }\nimg.programmer_img {\n  width: 18%;\n  height: 18%;\n  margin: 0;\n  padding: 0; }\nimg.hab {\n  width: 12%;\n  height: 12%;\n  margin: 0;\n  padding: 0;\n  -o-transform: rotate(-7deg);\n  -webkit-transform: rotate(-7deg);\n  -moz-transform: rotate(-7deg);\n  position: relative;\n  top: 90px;\n  left: -120px;\n  z-index: 1; }\nhr {\n  margin: 0;\n  padding: 0; }\nbody {\n  background-color: #ddd;\n  padding: 100px 20px 20px 20px; }\n.social-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: -10px; }\n.social-buttons__button {\n    margin: 10px 5px 0; }\n/* Iconos animados */\n.social-button {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  outline: none;\n  width: 70px;\n  height: 70px;\n  text-decoration: none; }\n.social-button__inner {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: calc(100% - 2px);\n    height: calc(100% - 2px);\n    border-radius: 100%;\n    background: #fff;\n    text-align: center; }\n.social-button i,\n  .social-button svg {\n    position: relative;\n    z-index: 1;\n    transition: 0.3s; }\n.social-button i {\n    font-size: 28px; }\n.social-button svg {\n    height: 40%;\n    width: 40%; }\n.social-button::after {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: 0;\n    height: 0;\n    border-radius: 100%;\n    transition: 0.3s; }\n.social-button:focus, .social-button:hover {\n    color: #fff; }\n.social-button:focus::after, .social-button:hover::after {\n      width: 100%;\n      height: 100%;\n      margin-left: -50%; }\n.social-button--mail {\n    color: #0072c6; }\n.social-button--mail::after {\n      background: #0072c6; }\n.social-button--facebook {\n    color: #3b5999; }\n.social-button--facebook::after {\n      background: #3b5999; }\n.social-button--linkedin {\n    color: #0077b5; }\n.social-button--linkedin::after {\n      background: #0077b5; }\n.social-button--github {\n    color: #6e5494; }\n.social-button--github::after {\n      background: #6e5494; }\n.social-button--codepen {\n    color: #212121; }\n.social-button--codepen::after {\n      background: #212121; }\n.social-button--steam {\n    color: #7da10e; }\n.social-button--steam::after {\n      background: #7da10e; }\n.social-button--snapchat {\n    color: #eec900; }\n.social-button--snapchat::after {\n      background: #eec900; }\n.social-button--twitter {\n    color: #55acee; }\n.social-button--twitter::after {\n      background: #55acee; }\n.social-button--instagram {\n    color: #e4405f; }\n.social-button--instagram::after {\n      background: #e4405f; }\n.social-button--email {\n    color: #ff6f61; }\n.social-button--email::after {\n      background: #ff6f61; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JvczM5L0RvY3VtZW50cy9IYWNrQUJvcy9Qcm95ZWN0byBGaW5hbC9jb3JhbC1ob3RlbC1GUk9OVC9zcmMvYXBwL2ZlYXR1cmVzL2Fib3V0L2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9FQUFZO0FBQ1o7RUFDSSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUIsRUFBQTtBQUczQjtFQUNJLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNEVBQTRFO0VBQzVFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7QUFHM0I7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixVQUFVLEVBQUE7QUFHZDtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVUsRUFBQTtBQUdkO0VBQ0ksaUJBQWlCO0VBQ2pCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksWUFBWTtFQUNaLGVBQWUsRUFBQTtBQUduQjtFQUNJLGVBQWUsRUFBQTtBQUluQixpQkFBQTtBQUVBOztFQUVJLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksbUJBQW1CO0VBQ25CLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBQTtFQUVBLGtCQUFBO0VBRUEsVUFBQTtFQUNBLDZDQUE2QztFQUM3QyxnQ0FBZ0M7RUFDaEMsMkJBQTJCO0VBQzNCLDZCQUE2QixFQUFBO0FBR2pDO0VBQ0ksMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFFBQVEsRUFBQTtBQUdaOztFQUlJLDRDQUE0QztFQUM1Qyw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUt4Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTtBQUdkO0VBQ0ksZUFBZTtFQUNmLFdBQVcsRUFBQTtBQUdmO0VBQ0kseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBO0FBR3JCO0VBQ0ksNENBQTRDO0VBQzVDLGVBQWU7RUFDZixTQUFTO0VBQ1QseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVLEVBQUE7QUFHZDtFQUNJLFVBQVU7RUFDVixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixVQUFVLEVBQUE7QUFHZDtFQUNJLFNBQVM7RUFDVCxVQUFVLEVBQUE7QUFHZDtFQUNJLHNCQUFzQjtFQUN0Qiw2QkFBNkIsRUFBQTtBQUdqQztFQUNJLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBO0FBQ2pCO0lBQ0ksa0JBQWtCLEVBQUE7QUFLMUIsb0JBQUE7QUFpQkE7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBckJ1QjtFQXNCdkIsWUF0QnVCO0VBdUJ2QixxQkFBcUIsRUFBQTtBQUNyQjtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixnQkE5QnVCO0lBK0J2QixrQkFBa0IsRUFBQTtBQWxCMUI7O0lBc0JRLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBbkM0QixFQUFBO0FBV3BDO0lBMkJRLGVBQTJELEVBQUE7QUEzQm5FO0lBOEJRLFdBQTRDO0lBQzVDLFVBQTJDLEVBQUE7QUEvQm5EO0lBa0NRLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxjQUFjO0lBQ2QsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsZ0JBckQ0QixFQUFBO0FBV3BDO0lBOENRLFdBMUR5QixFQUFBO0FBWWpDO01BZ0RZLFdBQVc7TUFDWCxZQUFZO01BQ1osaUJBQWlCLEVBQUE7QUFLckI7SUFDSSxjQWxFNEIsRUFBQTtBQWlFL0I7TUFHTyxtQkFwRXdCLEVBQUE7QUFpRWhDO0lBQ0ksY0FqRU8sRUFBQTtBQWdFVjtNQUdPLG1CQW5FRyxFQUFBO0FBZ0VYO0lBQ0ksY0FoRU8sRUFBQTtBQStEVjtNQUdPLG1CQWxFRyxFQUFBO0FBK0RYO0lBQ0ksY0EvREssRUFBQTtBQThEUjtNQUdPLG1CQWpFQyxFQUFBO0FBOERUO0lBQ0ksY0E5RE0sRUFBQTtBQTZEVDtNQUdPLG1CQWhFRSxFQUFBO0FBNkRWO0lBQ0ksY0E3REksRUFBQTtBQTREUDtNQUdPLG1CQS9EQSxFQUFBO0FBNERSO0lBQ0ksY0E1RE8sRUFBQTtBQTJEVjtNQUdPLG1CQTlERyxFQUFBO0FBMkRYO0lBQ0ksY0EzRE0sRUFBQTtBQTBEVDtNQUdPLG1CQTdERSxFQUFBO0FBMERWO0lBQ0ksY0ExRFEsRUFBQTtBQXlEWDtNQUdPLG1CQTVESSxFQUFBO0FBeURaO0lBQ0ksY0F6REksRUFBQTtBQXdEUDtNQUdPLG1CQTNEQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvYWJvdXQvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SZWVuaWUrQmVhbmllXCIpO1xuOmhvc3Qge1xuICAgIGJhY2tncm91bmQ6ICNmNmY1Zjc7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA3M3ZoO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWluLXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5kaXYudGl0bGVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuZGl2LnByb2dyYW1tZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0yOTBweDtcbiAgICBsZWZ0OiA3NXB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbmRpdi5wb3N0LWl0ZGl2IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmgxIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5oMiB7XG4gICAgbWFyZ2luOiAyOHB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuZGl2Pmkge1xuICAgIGZvbnQtc2l6ZTogN3JlbTtcbn1cblxuXG4vKkVzdGlsbyBwb3N0LWl0Ki9cblxudWwsXG5saSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxudWwge1xuICAgIHBhZGRpbmctbGVmdDogMTA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxudWwgbGkgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmU0ZTI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxMmVtO1xuICAgIHdpZHRoOiAxMmVtO1xuICAgIC8qIEZpcmVmb3ggKi9cbiAgICAtbW96LWJveC1zaGFkb3c6IDVweCA1cHggN3B4IHJnYmEoMzMsIDMzLCAzMywgMSk7XG4gICAgLyogU2FmYXJpK0Nocm9tZSAqL1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNXB4IDVweCA3cHggcmdiYSgzMywgMzMsIDMzLCAwLjcpO1xuICAgIC8qIE9wZXJhICovXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA3cHggcmdiYSgzMywgMzMsIDMzLCAwLjcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTZkZWcpO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC02ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC02ZGVnKTtcbn1cblxudWwgbGk6bnRoLWNoaWxkKGV2ZW4pIGEge1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDRkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0ZGVnKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1cHg7XG59XG5cbnVsIGxpIGE6aG92ZXIsXG51bCBsaSBhOmZvY3VzIHtcbiAgICAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCA3cHggcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuNyk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjcpO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLW91dDtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1vdXQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDU7XG59XG5cbnVsIGxpIHtcbiAgICBtYXJnaW46IDAgMS41ZW07XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbnVsIGxpIGgyIHtcbiAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIGFyaWFsLCBzYW5zLXNlO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxucC5wb3N0aXQge1xuICAgIGZvbnQtZmFtaWx5OiBcIlJlZW5pZSBCZWFuaWVcIiwgYXJpYWwsIHNhbnMtc2U7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDIwcHggMTBweCAyMHB4O1xufVxuXG5pbWcucHJvZ3JhbW1lcl9pbWcge1xuICAgIHdpZHRoOiAxOCU7XG4gICAgaGVpZ2h0OiAxOCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmltZy5oYWIge1xuICAgIHdpZHRoOiAxMiU7XG4gICAgaGVpZ2h0OiAxMiU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLTdkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTdkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTdkZWcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDkwcHg7XG4gICAgbGVmdDogLTEyMHB4O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbmhyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgICBwYWRkaW5nOiAxMDBweCAyMHB4IDIwcHggMjBweDtcbn1cblxuLnNvY2lhbC1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAmX19idXR0b24ge1xuICAgICAgICBtYXJnaW46IDEwcHggNXB4IDA7XG4gICAgfVxufVxuXG5cbi8qIEljb25vcyBhbmltYWRvcyAqL1xuXG4kc29jaWFsLWJ1dHRvbi1yYWRpdXM6IDcwcHg7XG4kc29jaWFsLWJ1dHRvbi1pY29uLXNpemU6IDAuNDtcbiRzb2NpYWwtYnV0dG9uLWJhY2tncm91bmQ6ICNmZmY7XG4kc29jaWFsLWJ1dHRvbi1hY3RpdmUtY29sb3I6ICNmZmY7XG4kc29jaWFsLWJ1dHRvbi10cmFuc2l0aW9uLXRpbWU6IDAuM3M7XG4kc29jaWFsLWJ1dHRvbi1jb2xvcnM6ICggXCJtYWlsXCI6ICMwMDcyYzYsXG5cImZhY2Vib29rXCI6ICMzYjU5OTksXG5cImxpbmtlZGluXCI6ICMwMDc3YjUsXG5cImdpdGh1YlwiOiAjNmU1NDk0LFxuXCJjb2RlcGVuXCI6ICMyMTIxMjEsXG5cInN0ZWFtXCI6ICM3ZGExMGUsXG5cInNuYXBjaGF0XCI6ICNlZWM5MDAsXG5cInR3aXR0ZXJcIjogIzU1YWNlZSxcblwiaW5zdGFncmFtXCI6ICNlNDQwNWYsXG5cImVtYWlsXCI6ICNmZjZmNjEpO1xuLnNvY2lhbC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aWR0aDogJHNvY2lhbC1idXR0b24tcmFkaXVzO1xuICAgIGhlaWdodDogJHNvY2lhbC1idXR0b24tcmFkaXVzO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAmX19pbm5lciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJweCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICRzb2NpYWwtYnV0dG9uLWJhY2tncm91bmQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgaSxcbiAgICBzdmcge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHRyYW5zaXRpb246ICRzb2NpYWwtYnV0dG9uLXRyYW5zaXRpb24tdGltZTtcbiAgICB9XG4gICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJHNvY2lhbC1idXR0b24tcmFkaXVzICogJHNvY2lhbC1idXR0b24taWNvbi1zaXplO1xuICAgIH1cbiAgICBzdmcge1xuICAgICAgICBoZWlnaHQ6IHBlcmNlbnRhZ2UoJHNvY2lhbC1idXR0b24taWNvbi1zaXplKTtcbiAgICAgICAgd2lkdGg6IHBlcmNlbnRhZ2UoJHNvY2lhbC1idXR0b24taWNvbi1zaXplKTtcbiAgICB9XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogJHNvY2lhbC1idXR0b24tdHJhbnNpdGlvbi10aW1lO1xuICAgIH1cbiAgICAmOmZvY3VzLFxuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogJHNvY2lhbC1idXR0b24tYWN0aXZlLWNvbG9yO1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNTAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBlYWNoICRuYW1lLFxuICAgICRjb2xvciBpbiAkc29jaWFsLWJ1dHRvbi1jb2xvcnMge1xuICAgICAgICAmLS0jeyRuYW1lfSB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/about/about/about.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/about/about/about.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponents", function() { return AboutComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponents = /** @class */ (function () {
    function AboutComponents() {
        this.title = "Hola! ";
        this.presentation = "Mi nombre es...";
        this.name = " María";
        this.descriptionTitle = "Quién soy?";
        this.description = "Programadora backend y frontend. Me encanta crear, diseñar y desarrollar!!";
        this.projectTitle = "Mi proyecto";
        this.project = "'The Coral Hotel' es mi proyecto final del Bootcamp Hack a Bos";
        this.textLinks = "Sigue mi trabajo en:  ";
        this.links = [
            {
                class: "social-buttons__button social-button social-button--linkedin",
                icon: "fab fa-linkedin-in",
                URL: "https://linkedin.com/in/maria-arteaga-jimenez",
                name: "LinkedIn"
            },
            {
                class: "social-buttons__button social-button social-button--github",
                icon: "fab fa-github",
                URL: "https://github.com/mariarte",
                name: "Github"
            },
            {
                class: "social-buttons__button social-button social-button--instagram",
                icon: "fab fa-instagram",
                URL: "https://www.instagram.com/?hl=es",
                name: "Instagram"
            },
            {
                class: "social-buttons__button social-button social-button--twitter",
                icon: "fab fa-twitter",
                URL: "https://twitter.com/?lang=es",
                name: "Twitter"
            }
        ];
        this.contact = {
            class: "social-buttons__button social-button social-button--email",
            icon: "far fa-envelope",
            description: "Puedes contactarme:",
            email: "maria.arjim@gmail.com"
        };
    }
    AboutComponents = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "sn-about",
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/features/about/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/features/about/about/about.component.scss")]
        })
    ], AboutComponents);
    return AboutComponents;
}());



/***/ })

}]);
//# sourceMappingURL=features-about-about-module.js.map