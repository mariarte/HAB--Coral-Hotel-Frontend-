export interface AuthInfo {
  resultToken: string;
}

export interface CoralHotelUser {
  idUser: string;
  fullName: string;
  email: string;
  password: string;
  createdAt: Date;
}

export interface SearchResult {
  idExperience: string;
  name: string;
  title: string;
  description: string;
}

export interface Context {
  value: string;
  key: string;
  label: string;
}

export interface Detail {
  message: string;
  path: string[];
  type: string;
  context: Context;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface Error {
  isJoi: boolean;
  name: string;
  details: Detail[];
  _object: UserLogin;
}
