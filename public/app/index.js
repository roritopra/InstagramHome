import data from "./data.js";
import "./components/index.js";
import { Attribute } from "./components/Profile/Profile.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.counters = [];
        this.profiles = [];
        this.attachShadow({ mode: "open" });
        const counter = this.ownerDocument.createElement("my-counter");
        counter.button.addEventListener("click", () => {
            console.log("button clicked");
        });
        this.counters.push(counter);
        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-profile");
            profileCard.setAttribute(Attribute.name, user.name);
            profileCard.setAttribute(Attribute.lastname, user.username);
            profileCard.setAttribute(Attribute.age, String(user.id));
            profileCard.addEventListener("click", () => console.log(user.name));
            this.profiles.push(profileCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            this.counters.forEach((counter) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(counter);
            });
            this.profiles.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
