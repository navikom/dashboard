import { IUser } from "interfaces/IUser";

export interface ILoginResult {
  session: number;
  expires: number;
  anonymous: boolean;
  user: IUser;
}
