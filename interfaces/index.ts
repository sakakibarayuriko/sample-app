export type postDataResult = {
  id: string;
  data: {
    [x: string]: any;
  };
}[];

export type postData = {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
};