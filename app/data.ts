interface DataShape {
  id: number;
  nameprofile: string;
    likeImg: string;
    profileImg: string;
    kimImg: string;
    commentImg: string;
    sendImg: string;
    comments: string;
    viewers: string;
  
}

const data: DataShape[] = [
  {
    id: 1,
    nameprofile: "Kim Kardashian",
    likeImg: "./app/imagenes/likes.jpg",
    profileImg: "./app/imagenes/perfil.jpg",
    kimImg: "./app/imagenes/kim.jpg",
    commentImg: "./app/imagenes/comment.jpg",
    sendImg: "./app/imagenes/send.jpg",
    comments: "29.658 comments",
    viewers: "1.094.576 views"
    
  },
];

export default data;
