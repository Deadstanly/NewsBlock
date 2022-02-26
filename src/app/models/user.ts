export interface IUser {
  email: string;
  password: string;
  news: {
    id?: number;
    title: string;
    country: string;
    link: string;
  }[]
}
