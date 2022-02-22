export class UserInfo {
  private static userInstance: UserInfo;

  private _email: string;
  private _token: string;

  private constructor() { }

  public static getInstance(): UserInfo {
    if(!UserInfo.userInstance) {
      UserInfo.userInstance = new UserInfo();
    }

    return UserInfo.userInstance;
  }

  set email(email: string) {
    this._email = email;
  }

  set token(token: string) {
    this._token = token;
  }

  get email(): string {
    return this._email;
  }

  get token(): string {
    return this._token;
  }

  public exit():void {
    this.email = '';
    this.token = '';
  }

}
