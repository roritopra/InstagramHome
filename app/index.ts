import "./components/index.js";
import data from "./dataPost.js";
import MyPost, {Attribute} from "./components/PostInsta/PostInsta";



class AppContainer extends HTMLElement{
    post: MyPost[] = [];

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
            postCard.setAttribute(Attribute.comments, user.viewers);
            
            this.post.push(postCard);
        });
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/PostInsta/post.css"> 
            <my-post/>
            `;

            this.post.forEach((post)=>{
                this.shadowRoot?.appendChild(post);

            
            });
        }
    }
}

customElements.define("app-container",AppContainer);