export var Attribute;
(function (Attribute) {
    Attribute["name"] = "name";
    Attribute["lastname"] = "lastname";
    Attribute["age"] = "age";
})(Attribute || (Attribute = {}));
class MyProfile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            age: null,
            lastname: null,
            name: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            case Attribute.age:
                this.age = newValue ? Number(newValue) : undefined;
                break;
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <section>
                <h1>${this.name} ${this.lastname}</h1>
                <p>This is one of our users</p>
                <span><strong>Tiene ${this.age} años</strong></span>
            </section>
            `;
        }
    }
}
customElements.define("my-profile", MyProfile);
export default MyProfile;
