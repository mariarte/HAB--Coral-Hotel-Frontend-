import { Injectable } from "@angular/core";
import { Error } from "../core.models";

@Injectable({
  providedIn: "root"
})
export class ToastService {
  toasts: Toast[] = [];

  /**
   * Función para añadir una notificación toast
   * @param {String} title
   * @param {String} message
   * @param {String} variant
   * @param {Number} delay
   */
  addToast(
    title: string,
    message: string,
    variant: string = "primary",
    delay: number = 6000
  ) {
    this.toasts.unshift({
      title,
      message,
      variant
    });

    if (delay) {
      this.delayAndRemove(delay);
    }
  }

  /**
   * Función para añadir una notificación toast de error
   * @param {Object} error
   * @param {Number} delay
   */
  addErrorToast(error, delay?: number) {
    this.toasts.unshift({
      title: "Error",
      message: error.message,
      variant: "danger"
    });

    if (delay) {
      this.delayAndRemove(delay);
    }
  }

  /**
   * Función que comprueba si un toast es de error o no
   * @param {Object} toast
   * @return {Boolean}
   */
  isErrorToast(toast: Toast) {
    if (toast.variant === "error") {
      return true;
    }
    return false;
  }

  /**
   * Función que muestra la notificación toast por un tiempo estipulado
   * @param {Number} milliseconds
   */
  delayAndRemove(milliseconds: number) {
    setTimeout(() => {
      this.toasts.pop();
    }, milliseconds);
  }

  /**
   * Función que elimina la notificación toast del array donde están guardados
   * @param {Number} index
   */
  remove(index?: number) {
    if (index) {
      this.toasts.splice(index, 1);
    } else {
      this.toasts.pop();
    }
  }
}

interface Toast {
  title: string;
  message: string;
  variant?: string;
  delay?: number;
}
