export enum Attribute {
    "nameprofile" = "nameprofile",
    "likeimg" = "likeimg",
    "profileimg" = "profileimg",
    "kimimg" = "kimimg",
    "commentimg" = "commentimg",
    "sendimg" = "sendimg",
    "saveimg" = "saveimg"
    "comments" = "comments",
    "viewers" = "viewers"
    
}

class MyPost extends HTMLElement{
    nameprofile?: string;
    likeimg?: string;
    profileimg?: string;
    kimimg?: string;
    commentimg?: string;
    sendimg?: string;
    saveimg?: string
    comments?: number;
    viewers?: number;

    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            nameprofile: null,
            likeimg: null,
            profileimg: null,
            kimimg: null,
            commentimg: null,
            sendimg: null,
            saveimg: null,
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
            this[propName] = newValue as any;
            this.render();
    }

    render(){        
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/PostInsta/post.css">
            <section>
                <div class="post-header">
                    <img src=${this.profileimg} height = "50np"></img>
                    <div>
                        <h2 class="username">${this.nameprofile}</h2>
                        <p class="sponsored-text">sponsored</p>
                    </div>
                </div>
                <img src=${this.kimimg} height = "500np"></img>

                <div class="tools">
                    <img src=${this.likeimg} height = "40np"></img>
                    <img src=${this.commentimg} height = "40np"></img>
                    <img src=${this.sendimg} height = "40np"></img>
                    <img src=${this.saveimg} height = "40np"></img>

                </div>
                <p>Milan spam get ready ????</p>
                <p><strong>${this.viewers} views</strong></p>
                <p><strong>Watch the ${this.comments} comments</strong></p>
            </section>
            `;
        }
    }

}

customElements.define("my-post", MyPost);
export default MyPost;