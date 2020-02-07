
export abstract class ApiBase {
  session: number | null;

  constructor(session: number | null) {
    this.session = session;
  }
}
