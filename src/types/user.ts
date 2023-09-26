export interface IUser {
  id?: string;
  email: string;
  name: string;
  phone: string;
  password: string;
  rePassword?: string;
  roles: string[];
}

export enum EROLES {
  USER = "0",
  ADMIN = "1",
}
