import "./components/index.js";
import MyNavegation, {Attribute} from "./components/Navegation/Navegation";

class AppContainer extends HTMLElement{
    profiles: MyNavegation[] = [];

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        
        }
       

        data.forEach((post)=>{
            const postCard = this.ownerDocument.createElement("my-navegation") as MyNavegation;
            postCard.setAttribute(Attribute.nameprofile, post.nameprofile);
            postCard.setAttribute(Attribute.likeImg, post.likeImg);
            postCard.setAttribute(Attribute.profileImg, post.profileImg);
            postCard.setAttribute(Attribute.kimImg, post.kimImg);
            postCard.setAttribute(Attribute.commentImg, post.commentImg);
            postCard.setAttribute(Attribute.sendImg, post.sendImg);
            postCard.setAttribute(Attribute.comments, post.comments);
            postCard.setAttribute(Attribute.comments, post.viewers);
            
            this.posts.push(postCard);
        });
    };

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            this.counters.forEach((counter)=>{
                this.shadowRoot?.appendChild(counter);
            });
            this.posts.forEach((post)=>{
                this.shadowRoot?.appendChild(post);
            });
        }
    }
}

customElements.define("app-container",AppContainer);