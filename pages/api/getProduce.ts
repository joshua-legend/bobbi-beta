import type { NextApiRequest, NextApiResponse } from 'next'

type idAndUrl = {
  id:number,
  url:string
}

type nameAndUrl = {
  name:string,
  url:string,
}

type Data = {
  id: idAndUrl;
  title: nameAndUrl;
  register: string;
  date: string,
  use: boolean,
  hot_index: number,
  participate_index: number,
  comment_index: number,
};

const makeStrRan = () =>{
  return (Math.random() + 1).toString(36).substring(7);
}
const makeNumRan = () =>{
  return Math.floor(Math.random() * 1000) + 1;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      id:{id:1,url:"https://picsum.photos/200"},
      title: {name:makeStrRan(),url:"https://picsum.photos/200"},
      register: makeStrRan(),
      date: (new Date()).toJSON(),
      use: true,
      hot_index: makeNumRan(),
      participate_index: makeNumRan(),
      comment_index: makeNumRan(),
    },
    {
      id:{id:1,url:"https://picsum.photos/200"},
      title: {name:makeStrRan(),url:"https://picsum.photos/200"},
      register: makeStrRan(),
      date: (new Date()).toJSON(),
      use: true,
      hot_index: makeNumRan(),
      participate_index: makeNumRan(),
      comment_index: makeNumRan(),
    },
    {
      id:{id:1,url:"https://picsum.photos/200"},
      title: {name:makeStrRan(),url:"https://picsum.photos/200"},
      register: makeStrRan(),
      date: (new Date()).toJSON(),
      use: true,
      hot_index: makeNumRan(),
      participate_index: makeNumRan(),
      comment_index: makeNumRan(),
    },
    {
      id:{id:1,url:"https://picsum.photos/200"},
      title: {name:makeStrRan(),url:"https://picsum.photos/200"},
      register: makeStrRan(),
      date: (new Date()).toJSON(),
      use: true,
      hot_index: makeNumRan(),
      participate_index: makeNumRan(),
      comment_index: makeNumRan(),
    },
    {
      id:{id:1,url:"https://picsum.photos/200"},
      title: {name:makeStrRan(),url:"https://picsum.photos/200"},
      register: makeStrRan(),
      date: (new Date()).toJSON(),
      use: true,
      hot_index: makeNumRan(),
      participate_index: makeNumRan(),
      comment_index: makeNumRan(),
    },
    {
      id:{id:1,url:"https://picsum.photos/200"},
      title: {name:makeStrRan(),url:"https://picsum.photos/200"},
      register: makeStrRan(),
      date: (new Date()).toJSON(),
      use: true,
      hot_index: makeNumRan(),
      participate_index: makeNumRan(),
      comment_index: makeNumRan(),
    },
    {
      id:{id:1,url:"https://picsum.photos/200"},
      title: {name:makeStrRan(),url:"https://picsum.photos/200"},
      register: makeStrRan(),
      date: (new Date()).toJSON(),
      use: true,
      hot_index: makeNumRan(),
      participate_index: makeNumRan(),
      comment_index: makeNumRan(),
    },
    {
      id:{id:1,url:"https://picsum.photos/200"},
      title: {name:makeStrRan(),url:"https://picsum.photos/200"},
      register: makeStrRan(),
      date: (new Date()).toJSON(),
      use: true,
      hot_index: makeNumRan(),
      participate_index: makeNumRan(),
      comment_index: makeNumRan(),
    },
    {
      id:{id:1,url:"https://picsum.photos/200"},
      title: {name:makeStrRan(),url:"https://picsum.photos/200"},
      register: makeStrRan(),
      date: (new Date()).toJSON(),
      use: true,
      hot_index: makeNumRan(),
      participate_index: makeNumRan(),
      comment_index: makeNumRan(),
    },
    {
      id:{id:1,url:"https://picsum.photos/200"},
      title: {name:makeStrRan(),url:"https://picsum.photos/200"},
      register: makeStrRan(),
      date: (new Date()).toJSON(),
      use: true,
      hot_index: makeNumRan(),
      participate_index: makeNumRan(),
      comment_index: makeNumRan(),
    },    {
      id:{id:1,url:"https://picsum.photos/200"},
      title: {name:makeStrRan(),url:"https://picsum.photos/200"},
      register: makeStrRan(),
      date: (new Date()).toJSON(),
      use: true,
      hot_index: 10,
      participate_index: 100,
      comment_index: 10,
    },
    {
      id:{id:1,url:"https://picsum.photos/200"},
      title: {name:makeStrRan(),url:"https://picsum.photos/200"},
      register: makeStrRan(),
      date: (new Date()).toJSON(),
      use: true,
      hot_index: 10,
      participate_index: 100,
      comment_index: 10,
    },
  ])
}
