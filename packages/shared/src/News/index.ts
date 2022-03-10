interface INews {
  id: number;
  title: string;
  newspaperName: string;
  time: string;
  img: string;
  link: string;
}
interface INewsState {
  news: INews[];
}
export { INews, INewsState };
