import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/core/services/user.service";
var MyAccountComponent = /** @class */ (function () {
    function MyAccountComponent(fb, userService) {
        this.fb = fb;
        this.userService = userService;
        this.updateProfileForm = this.fb.group({
            fullName: ["", [Validators.required]],
            email: [""]
        });
    }
    MyAccountComponent.prototype.ngOnInit = function () {
        this.updateProfileForm.setValue({
            fullName: this.userService.currentUser.fullName,
            email: this.userService.currentUser.email
        });
    };
    MyAccountComponent.prototype.updateProfile = function () {
        if (this.updateProfileForm.valid) {
            this.userService
                .updateProfile({ fullName: this.updateProfileForm.value.fullName })
                .subscribe();
        }
    };
    MyAccountComponent.prototype.deleteProfile = function () {
        this.userService.deleteProfile(this.userService.currentUser).subscribe();
    };
    MyAccountComponent = tslib_1.__decorate([
        Component({
            selector: "sn-my-account",
            templateUrl: "./my-account.component.html",
            styleUrls: ["./my-account.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, UserService])
    ], MyAccountComponent);
    return MyAccountComponent;
}());
export { MyAccountComponent };
//# sourceMappingURL=my-account.component.js.map