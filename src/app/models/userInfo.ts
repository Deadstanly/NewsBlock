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
    localStorage.setItem('email', this.email)
  }

  set token(token: string) {
    this._token = token;
    localStorage.setItem('token', this.token)
  }

  get email(): string {
    if(!this._email && localStorage.getItem('email')) {
        this._email = localStorage.getItem('email');
    }
    return this._email;
  }

  get token(): string {
    if(!this._token && localStorage.getItem('token')) {
      this._token = localStorage.getItem('token')
    }
    return this._token;
  }

  public exit():void {
    this.email = '';
    this.token = '';
  }

}
