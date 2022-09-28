interface dataPost {
  id: number;
  nameprofile: string;
    likeimg: string;
    profileimg: string;
    kimimg: string;
    commentimg: string;
    sendimg: string;
    comments: number;
    viewers: number;
  
}

const data: dataPost[] = [
  {
    id: 1,
    nameprofile: "Kim Kardashian",
    likeimg: "../imagesPost/likes.png",
    profileimg: "../imagesPost/perfil.png",
    kimimg: "../imagesPost/kim.jpg",
    commentimg: "../imagesPost/comment.png",
    sendimg: "../imagesPost/send.png",
    comments: 29658,
    viewers: 1094576
  },
];

export default data;
