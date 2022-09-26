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
            postCard.setAttribute(Attribute.likeImg, user.likeImg);
            postCard.setAttribute(Attribute.profileImg, user.profileImg);
            postCard.setAttribute(Attribute.kimImg, user.kimImg);
            postCard.setAttribute(Attribute.commentImg, user.commentImg);
            postCard.setAttribute(Attribute.sendImg, user.sendImg);
            postCard.setAttribute(Attribute.comments, user.comments);
            postCard.setAttribute(Attribute.viewers, user.viewers);
            
            this.post.push(postCard);
        });

        data2.forEach((Menuser)=>{
            const menuCard = this.ownerDocument.createElement("my-post") as MyMenu;
            menuCard.setAttribute(Attribute2.addImg, Menuser.addImg);
            menuCard.setAttribute(Attribute2.sendMenuImg, Menuser.sendMenuImg);
            menuCard.setAttribute(Attribute2.exploreImg, Menuser.exploreImg);
            menuCard.setAttribute(Attribute2.homeImg, Menuser.homeImg);
            menuCard.setAttribute(Attribute2.likeMenuImg, Menuser.likeMenuImg);
            menuCard.setAttribute(Attribute2.perfilMenuImg, Menuser.perfilMenuImg);
            menuCard.setAttribute(Attribute2.instagramImg, Menuser.instagramImg);
            
            this.Menuser.push(menuCard);
        });

    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/PostInsta/post.css"> 
            

           
            `;

            this.post.forEach((post)=>{
                this.shadowRoot?.appendChild(post);

            });
               
                this.post.forEach((Menuser)=>{
                this.shadowRoot?.appendChild(Menuser);    

            
            });
        }
    }
}

customElements.define("app-container",AppContainer);