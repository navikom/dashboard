
export abstract class ApiBase {
  session: number | null;

  protected constructor(session: number | null) {
    this.session = session;
  }
}
