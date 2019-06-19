(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-private-area-private-area-module"],{

/***/ "./src/app/features/private-area/private-area.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/private-area/private-area.module.ts ***!
  \**************************************************************/
/*! exports provided: PrivateAreaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateAreaModule", function() { return PrivateAreaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _private_area_private_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./private-area/private-area.component */ "./src/app/features/private-area/private-area/private-area.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/layout.module */ "./src/app/layout/layout.module.ts");






var routes = [
    {
        path: "",
        component: _private_area_private_area_component__WEBPACK_IMPORTED_MODULE_3__["PrivateAreaComponent"]
    }
];
var PrivateAreaModule = /** @class */ (function () {
    function PrivateAreaModule() {
    }
    PrivateAreaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_private_area_private_area_component__WEBPACK_IMPORTED_MODULE_3__["PrivateAreaComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]]
        })
    ], PrivateAreaModule);
    return PrivateAreaModule;
}());



/***/ }),

/***/ "./src/app/features/private-area/private-area/private-area.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/features/private-area/private-area/private-area.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content animated fadeIn\">\n\n    <div>\n        <sn-search></sn-search>\n    </div>\n\n    <div>\n        <sn-card></sn-card>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/features/private-area/private-area/private-area.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/features/private-area/private-area/private-area.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3ByaXZhdGUtYXJlYS9wcml2YXRlLWFyZWEvcHJpdmF0ZS1hcmVhLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/private-area/private-area/private-area.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/features/private-area/private-area/private-area.component.ts ***!
  \******************************************************************************/
/*! exports provided: PrivateAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateAreaComponent", function() { return PrivateAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var src_app_core_services_private_area_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/private-area.service */ "./src/app/core/services/private-area.service.ts");




var PrivateAreaComponent = /** @class */ (function () {
    function PrivateAreaComponent(userService, privateArea) {
        this.userService = userService;
        this.privateArea = privateArea;
    }
    PrivateAreaComponent.prototype.ngOnInit = function () {
        this.privateArea.getExperiences().subscribe();
    };
    PrivateAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "sn-private-area",
            template: __webpack_require__(/*! ./private-area.component.html */ "./src/app/features/private-area/private-area/private-area.component.html"),
            styles: [__webpack_require__(/*! ./private-area.component.scss */ "./src/app/features/private-area/private-area/private-area.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_core_services_private_area_service__WEBPACK_IMPORTED_MODULE_3__["PrivateAreaService"]])
    ], PrivateAreaComponent);
    return PrivateAreaComponent;
}());



/***/ })

}]);
//# sourceMappingURL=features-private-area-private-area-module.js.map