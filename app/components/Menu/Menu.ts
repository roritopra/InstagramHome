export enum Attribute2 {
    "addImg" = "addImg",
    "sendMenuImg" = "sendMenuImg",
    "exploreImg" = "exploreImg",
    "homeImg" = "homeImg",
    "likeMenuImg" = "likeMenuImg",
    "perfilMenuImg" = "perfilMenuImg",
    "instagramImg" = "instagramImg"
   
}

class MyMenu extends HTMLElement{
    addImg?: string;
    sendMenuImg?: string;
    exploreImg?: string;
    homeImg?: string;
    likeMenuImg?: string;
    perfilMenuImg?: string;
    instagramImg?: string;

    static get observedAttributes(){
        const attrs: Record<Attribute2,null> = {
            addImg: null,
            sendMenuImg: null,
            exploreImg: null,
            homeImg: null,
            likeMenuImg: null,
            perfilMenuImg: null,
            instagramImg: null,
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
        propName: Attribute2, 
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
           
            <img src=${this.instagramImg} height = "50np"></img>
            <img src=${this.homeImg} height = "50np"></img>
            <img src=${this.sendMenuImg} height = "50np"></img>
            <img src=${this.addImg} height = "50np"></img>
            <img src=${this.exploreImg} height = "50np"></img>
            <img src=${this.likeMenuImg} height = "50np"></img>
            <img src=${this.perfilMenuImg} height = "50np"></img>

            </section>
            `;
        }
    }

}

customElements.define("my-menu", MyMenu);
export default MyMenu;