import { NgModule, APP_INITIALIZER } from "@angular/core";
import { UserService } from "./core/services/user.service";
import { BookingService } from "./core/services/booking.service";
// import { NotificationService } from './core/services/notification.service';

export function getInitialData(
  userService: UserService,
  bookingService: BookingService
) {
  return () => {
    if (localStorage.getItem("auth")) {
      return new Promise(async resolve => {
        try {
          await userService.getUserProfile().toPromise();
          console.log("USER INICIAL: ", userService.currentUser.idUser);
          await bookingService
            .getBookings(userService.currentUser.idUser)
            .toPromise();

          return resolve();
        } catch (error) {
          return resolve(error);
        }
      });
    }
    return Promise.resolve();
  };
}

@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: getInitialData,
      deps: [UserService, BookingService],
      //   deps: [UserService, NotificationService],
      multi: true
    }
  ]
})
export class AppInitializerModule {}
