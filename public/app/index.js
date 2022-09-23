import "./components/index.js";
import data from "./dataPost.js";
import { Attribute } from "./components/PostInsta/PostInsta.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.post = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const postCard = this.ownerDocument.createElement("my-post");
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
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/PostInsta/post.css"> 
            <my-post/>
            `;
            this.post.forEach((post) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(post);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
