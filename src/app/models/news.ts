export interface INews {
  id?: number;
  title: string;
  country: string;
  link: string;
  news: {
    id: number,
    title: string,
    country: string,
    link: string,
  }[]
}
