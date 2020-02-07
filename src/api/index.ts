import MainApi from "api/MainApi/Api";
import { Auth } from "models/Auth/Auth";
import { ErrorHandler } from "utils/ErrorHandler";

export enum Apis {
  Main,
}
export function api(type: Apis) {
  if (type === Apis.Main) {
      return new MainApi(Auth.session);
  }
  throw new ErrorHandler('There is not Api type provided');
}
