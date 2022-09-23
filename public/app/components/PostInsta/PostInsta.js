export var Attribute;
(function (Attribute) {
    Attribute["nameprofile"] = "nameprofile";
    Attribute["likeImg"] = "likeImg";
    Attribute["profileImg"] = "profileImg";
    Attribute["kimImg"] = "kimImg";
    Attribute["commentImg"] = "commentImg";
    Attribute["sendImg"] = "sendImg";
    Attribute["comments"] = "comments";
    Attribute["viewers"] = "viewers";
})(Attribute || (Attribute = {}));
class MyPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            nameprofile: null,
            likeImg: null,
            profileImg: null,
            kimImg: null,
            commentImg: null,
            sendImg: null,
            comments: null,
            viewers: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section>
            <img src=${this.profileImg} height = "50np"></img>
            <h2>${this.nameprofile}</h2>
            <p>sponsored</p>
            <img src=${this.kimImg} height = "500np"></img>
            <p> </p>
            <img src=${this.likeImg} height = "40np"></img>
            <img src=${this.commentImg} height = "40np"></img>
            <img src=${this.sendImg} height = "40np"></img>
            <p> </p>
            <span><strong>${this.viewers}</strong></span>
            <p> </p>
            <span><strong>${this.comments}</strong></span>
            </section>
            `;
        }
    }
}
customElements.define("my-post", MyPost);
export default MyPost;
