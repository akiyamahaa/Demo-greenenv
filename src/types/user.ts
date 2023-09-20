export interface IUser {
  username: string;
  password: string;
  email: string;
  roles: string[];
}

export enum EROLES {
  USER = "0",
  ADMIN = "1",
}
