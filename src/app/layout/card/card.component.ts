import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { UserService } from "src/app/core/services/user.service";
import { PrivateAreaService } from "src/app/core/services/private-area.service";
import { OrderService } from "src/app/core/services/order.service";
import { ToastService } from "src/app/core/services/toast.service";
import { BookingService } from "src/app/core/services/booking.service";
import { Experience } from "src/app/features/private-area/private-area.models";
import { BadgeComponent } from "../badge/badge.component";

@Component({
  selector: "sn-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() public idExperience: Experience;

  constructor(
    public userService: UserService,
    public privateArea: PrivateAreaService,
    public orderService: OrderService,
    public bookingService: BookingService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.privateArea.getExperiences().subscribe();
  }

  // añadir o restar cantidad en el boton
  substractQuantity(experience) {
    if (experience.quantity <= 1) {
      return;
    }
    experience.quantity = experience.quantity - 1;
  }

  addQuantity(experience) {
    experience.quantity = experience.quantity + 1;
  }

  addOrder(experience, ngmodel) {
    console.log(this.userService.currentUser.idUser);
    console.log(this.userService.currentUser.email);
    console.log(experience.idExperience);
    console.log(experience.quantity);
    console.log("Comments 1: ", experience.comments);
    console.log("Mi variable ngmodel", ngmodel);

    // Lo meto en subscribe para que cuando tenga el ok del back, añada el toast, etc...
    this.orderService.insertOrder({ experience }).subscribe(() => {
      this.toastService.addToast(
        "Experiencia añadida",
        "Confirme los datos en su carrito para que el departamento de recepción lo procese correctamente."
      );
      experience.quantity = 1; // Reseteo las unidades de la card a 1
      experience.comments = "";
      this.bookingService.getOrderCount(); // actualiza el número de orders en el icono de badge
    });

    ngmodel.reset(); // para que no me salga el estilo de form verde
  }
}
