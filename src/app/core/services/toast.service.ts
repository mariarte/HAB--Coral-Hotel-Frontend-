import { Injectable } from "@angular/core";
import { Error } from "../core.models";

@Injectable({
  providedIn: "root"
})
export class ToastService {
  toasts: Toast[] = [];

  addToast(
    title: string,
    message: string,
    variant: string = "primary",
    delay: number = 5000
  ) {
    this.toasts.unshift({
      title,
      message,
      variant
      // delay
    });

    if (delay) {
      this.delayAndRemove(delay);
    }
  }

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

  isErrorToast(toast: Toast) {
    if (toast.variant === "error") {
      return true;
    }
    return false;
  }

  delayAndRemove(milliseconds: number) {
    setTimeout(() => {
      this.toasts.pop();
    }, milliseconds);
  }

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
