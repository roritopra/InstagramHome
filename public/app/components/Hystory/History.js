export var Attribute3;
(function (Attribute3) {
    Attribute3["userhistory"] = "userhistory";
    Attribute3["imagehistory"] = "imagehistory";
})(Attribute3 || (Attribute3 = {}));
class MyHistory extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            userhistory: null,
            imagehistory: null
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
            <link rel="stylesheet" href="./app/components/Menu/menu.css"> 
            <section class = "history">
                <img class = "imagen" src = ${this.imagehistory}></img> 
                <h2 class = "username">${this.userhistory}</h2>

            </section>
            `;
        }
    }
}
customElements.define("my-history", MyHistory);
export default MyHistory;