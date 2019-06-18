import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { UserService } from "src/app/core/services/user.service";
import { PrivateAreaService } from "src/app/core/services/private-area.service";
import { OrderService } from "src/app/core/services/order.service";
import { ToastService } from "src/app/core/services/toast.service";
import { BookingService } from "src/app/core/services/booking.service";
import { Experience } from "src/app/features/private-area/private-area.models";

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

  /**
   * Función para disminuir la cantidad del valor
   * @param {Object} experience
   */
  substractQuantity(experience) {
    if (experience.quantity <= 1) {
      return;
    }
    experience.quantity = experience.quantity - 1;
  }

  /**
   * Función para aumentar la cantidad del valor
   * @param {Object} experience
   */
  addQuantity(experience) {
    experience.quantity = experience.quantity + 1;
  }

  /**
   * Función para añadir la order a la cesta
   * @param {Object} experience
   * @param ngmodel
   */
  addOrder(experience, ngmodel) {
    this.orderService.insertOrder({ experience }).subscribe(() => {
      this.toastService.addToast(
        "Experiencia añadida",
        "Confirme los datos en su carrito para que el departamento de recepción lo procese correctamente."
      );
      experience.quantity = 1;
      experience.comments = "";
      this.bookingService // Muestro las order de la cesta para que se vayan actualizando
        .getBookings(this.userService.currentUser.idUser)
        .subscribe();
    });
    ngmodel.reset();
  }
}
