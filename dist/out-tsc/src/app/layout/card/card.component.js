import * as tslib_1 from "tslib";
import { Component, Input } from "@angular/core";
import { UserService } from "src/app/core/services/user.service";
import { PrivateAreaService } from "src/app/core/services/private-area.service";
import { OrderService } from "src/app/core/services/order.service";
import { ToastService } from "src/app/core/services/toast.service";
import { BookingService } from "src/app/core/services/booking.service";
var CardComponent = /** @class */ (function () {
    function CardComponent(userService, privateArea, orderService, bookingService, toastService) {
        this.userService = userService;
        this.privateArea = privateArea;
        this.orderService = orderService;
        this.bookingService = bookingService;
        this.toastService = toastService;
    }
    CardComponent.prototype.ngOnInit = function () {
        this.privateArea.getExperiences().subscribe();
    };
    // añadir o restar cantidad en el boton
    CardComponent.prototype.substractQuantity = function (experience) {
        if (experience.quantity <= 1) {
            return;
        }
        experience.quantity = experience.quantity - 1;
    };
    CardComponent.prototype.addQuantity = function (experience) {
        experience.quantity = experience.quantity + 1;
    };
    CardComponent.prototype.addOrder = function (experience, ngmodel) {
        var _this = this;
        console.log(this.userService.currentUser.idUser);
        console.log(this.userService.currentUser.email);
        console.log(experience.idExperience);
        console.log(experience.quantity);
        console.log("Comments 1: ", experience.comments);
        console.log("Mi variable ngmodel", ngmodel);
        // Lo meto en subscribe para que cuando tenga el ok del back, añada el toast, etc...
        this.orderService.insertOrder({ experience: experience }).subscribe(function () {
            _this.toastService.addToast("Experiencia añadida", "Confirme los datos en su carrito para que el departamento de recepción lo procese correctamente.");
            experience.quantity = 1; // Reseteo las unidades de la card a 1
            experience.comments = "";
            _this.bookingService.getBookings(_this.userService.currentUser.idUser);
            _this.bookingService.getOrderCount(); // actualiza el número de orders en el icono de badge
        });
        ngmodel.reset(); // para que no me salga el estilo de form verde
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CardComponent.prototype, "idExperience", void 0);
    CardComponent = tslib_1.__decorate([
        Component({
            selector: "sn-card",
            templateUrl: "./card.component.html",
            styleUrls: ["./card.component.scss"]
        }),
        tslib_1.__metadata("design:paramtypes", [UserService,
            PrivateAreaService,
            OrderService,
            BookingService,
            ToastService])
    ], CardComponent);
    return CardComponent;
}());
export { CardComponent };
//# sourceMappingURL=card.component.js.map