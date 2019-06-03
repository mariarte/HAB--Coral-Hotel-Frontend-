export interface Booking {
  idOrder: number;
  idUser: number;
  idExperience: number;
  title: string;
  units: number;
  orderDate: Date;
  comments: string;
  confirmedAt: Date;
}
