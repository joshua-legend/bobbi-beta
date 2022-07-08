interface TypeUrl<T> {
  type:T,
  url:string,
}


export interface IProduce {
  id: {
    id:number,
    url:string,
  };
  title: {
    name:string,
    url:string,
  };
  register: string;
  date: string,
  use: boolean,
  hot_index: number,
  participate_index: number,
  comment_index: number,
}

export interface ITable<T> {
  head: T,
  body: T[] | null
}

