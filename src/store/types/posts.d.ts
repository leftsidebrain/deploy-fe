export interface IPost {
  title: string;
  content: string;
  id: number;
  author: {
    username: string;
    fullname: string;
    email: string;
    profile_pic: string;
  };
  comments: [
    {
      content: string;
      title: string;
      images: string;
    }
  ];
  images: [
    {
      image: string;
    }
  ];
}
