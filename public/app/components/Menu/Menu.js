export var Attribute2;
(function (Attribute2) {
    Attribute2["addImg"] = "addImg";
    Attribute2["sendMenuImg"] = "sendMenuImg";
    Attribute2["exploreImg"] = "exploreImg";
    Attribute2["homeImg"] = "homeImg";
    Attribute2["likeMenuImg"] = "likeMenuImg";
    Attribute2["perfilMenuImg"] = "perfilMenuImg";
    Attribute2["instagramImg"] = "instagramImg";
})(Attribute2 || (Attribute2 = {}));
class MyMenu extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
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
