export enum Attribute {
    "nameprofile" = "nameprofile",
    "likeImg" = "likeImg",
    "profileImg" = "profileImg",
    "kimImg" = "kimImg",
    "commentImg" = "commentImg",
    "sendImg" = "sendImg",
    "comments" = "comments",
    "viewers" = "viewers"
}

class MyPost extends HTMLElement{
    nameprofile?: string;
    likeImg?: string;
    profileImg?: string;
    kimImg?: string;
    commentImg?: string;
    sendImg?: string;
    comments?: string;
    viewers?: string;

    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
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

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute, 
        oldValue: string | undefined,
        newValue: string | undefined,
        ){
           
            this[propName] = newValue;
            this.render();
    }

    render(){
        if(this.shadowRoot){
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