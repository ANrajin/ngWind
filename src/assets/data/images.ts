export interface IUsers {
  userOne: string;
}
export interface IAuth {
  signup: string;
}
export class Images {
  public static readonly mainLogo: string = './assets/images/logo/my-logo.png';
  public static readonly bannerLogo: string = './assets/images/logo/login.png';

  public static readonly auth: IAuth = {
    signup: './assets/images/authpage/signup.jpg',
  };

  public static readonly users: IUsers = {
    userOne: './assets/images/authpage/profile-image.jpg',
  };
}
