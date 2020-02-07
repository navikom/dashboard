import { ApiBase } from "api/ApiBase";
import { HttpBase } from "api/HttpBase";
import { ILoginResult } from "interfaces/ILoginResult";

export default class Api extends ApiBase {
  constructor(session: number | null) {
    super(session);
  }

  get user(): User {
    return new User(this.session);
  }

  get event(): AEvent {
    return new AEvent(this.session);
  }

  get app(): App {
    return new App(this.session);
  }

  get setting(): Setting {
    return new Setting(this.session);
  }

  get pixartPicture(): PixartPicture {
    return new PixartPicture(this.session);
  }

  get role(): Roles {
    return new Roles(this.session);
  }

  get segment(): Segments {
    return new Segments(this.session);
  }

  get campaign(): Campaign {
    return new Campaign(this.session);
  }

  get region(): Region {
    return new Region(this.session);
  }
}

class User extends HttpBase {
  constructor(session: number | null) {
    super("users", session);
  }

  signup(email: string, password: string): Promise<ILoginResult> {
    const body = {
      email: email,
      password: password,
      grantType: "password"
    };
    return this.fetchData("post", "sign-up", body);
  }

  anonymous(): Promise<ILoginResult> {
    return this.fetchData("post", "anonymous");
  }

  login(email: string, password: string): Promise<ILoginResult> {
    const body = {
      email: email,
      password: password,
      grantType: "password"
    };
    return this.fetchData("post", "login", body);
  }

  logout(): Promise<null> {
    return this.fetchData("get", "logout");
  }

  refresh(): Promise<ILoginResult> {
    const body = {
      grantType: "refresh"
    };
    return this.fetchData("post", "login", body)
  }

  changePassword(password: string, newPassword: string) {
    return this.fetchData("post", "change-password", {password, newPassword});
  }

  updateRole(userId: number, roleId: number) {
    return this.fetchData("post", `${userId}/update-role/${roleId}`);
  }

}

class AEvent extends HttpBase {
  constructor(session: number | null) {
    super("events", session);
  }
}

class App extends HttpBase {
  constructor(session: number | null) {
    super("apps", session);
  }

  update(appId: number, data: any) {
    return this.fetchData("put", appId.toString(), data, undefined, ["Content-Type", "Accept"]);
  }

  sortImages(appId: number, data: {imageId: number, sort: number}[]) {
    return this.fetchData("put", `${appId}/images/sort`, data);
  }

  deleteAppImage(appId: number, imageId: number) {
    return this.fetchData("delete", `${appId}/image/${imageId}`);
  }
}

class Setting extends HttpBase {
  constructor(session: number | null) {
    super("settings", session);
  }

  getData() {
    return this.fetchData("get");
  }
}

class PixartPicture extends HttpBase {
  constructor(session: number | null) {
    super("pixart-pictures", session);
  }

  save(data: any) {
    return this.fetchData("post", undefined, data, undefined, ["Content-Type", "Accept"]);
  }
}

class Roles extends HttpBase {
  constructor(session: number | null) {
    super("roles", session);
  }
}

class Segments extends HttpBase {
  constructor(session: number | null) {
    super("segments", session);
  }
}

class Campaign extends HttpBase {
  constructor(session: number | null) {
    super("campaigns", session);
  }
}

class Region extends HttpBase {
  constructor(session: number | null) {
    super("regions", session);
  }
}
