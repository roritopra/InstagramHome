interface dataPost {
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

const data: dataPost[] = [
  {
    id: 1,
    nameprofile: "Kim Kardashian",
    likeImg: "../imagesPost/likes.jpg",
    profileImg: "../imagesPost/perfil.jpg",
    kimImg: "../imagesPost/kim.jpg",
    commentImg: "../imagesPost/comment.jpg",
    sendImg: "../imagesPost/send.jpg",
    comments: "29.658 comments",
    viewers: "1.094.576 views"
    
  },
];

export default data;
