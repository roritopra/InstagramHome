import "./components/index.js";
import data from "./dataPost.js";
import data2 from "./dataMenu.js";
import MyPost, {Attribute} from "./components/PostInsta/PostInsta.js";
import MyMenu, {Attribute2} from "./components/Menu/Menu.js";

class AppContainer extends HTMLElement{
    post: MyPost[] = [];
    Menuser: MyMenu[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        
        data.forEach((user)=>{
            
            const postCard = this.ownerDocument.createElement("my-post") as MyPost;
            postCard.setAttribute(Attribute.nameprofile, user.nameprofile);
            postCard.setAttribute(Attribute.likeimg, user.likeimg);
            postCard.setAttribute(Attribute.profileimg, user.profileimg);
            postCard.setAttribute(Attribute.kimimg, user.kimimg);
            postCard.setAttribute(Attribute.commentimg, user.commentimg);
            postCard.setAttribute(Attribute.sendimg, user.sendimg);
            postCard.setAttribute(Attribute.comments, user.comments);
            postCard.setAttribute(Attribute.viewers, user.viewers);

            this.post.push(postCard);
        });

        data2.forEach((Menuser)=>{
            const menuCard = this.ownerDocument.createElement("my-menu") as MyMenu;
            menuCard.setAttribute(Attribute2.addimg, Menuser.addimg);
            menuCard.setAttribute(Attribute2.sendmenuimg, Menuser.sendmenuimg);
            menuCard.setAttribute(Attribute2.exploreimg, Menuser.exploreimg);
            menuCard.setAttribute(Attribute2.homeimg, Menuser.homeimg);
            menuCard.setAttribute(Attribute2.likemenuimg, Menuser.likemenuimg);
            menuCard.setAttribute(Attribute2.perfilmenuimg, Menuser.perfilmenuimg);
            menuCard.setAttribute(Attribute2.instagramimg, Menuser.instagramimg);
            
            this.Menuser.push(menuCard);
        });

    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/style.css"> `;

            const contentContainer = document.createElement("div");
            contentContainer.classList.add("content");
            const postContainer = document.createElement("div");

            this.Menuser.forEach((Menuser)=>{
                this.shadowRoot?.appendChild(Menuser);    
            });

            
            this.post.forEach((post)=>{
                postContainer.appendChild(post);
            });

            //contentContainer.appendChild(suggested);
               
            contentContainer.appendChild(postContainer);
            this.shadowRoot?.appendChild(contentContainer);
        }
    }
}

customElements.define("app-container",AppContainer);