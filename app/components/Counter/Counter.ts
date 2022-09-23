class MyCounter extends HTMLElement{
    count = 0;
    button: HTMLElement;

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.button = this.ownerDocument.createElement("button");
        this.button.textContent = "Click me";
        this.button.addEventListener("click",this.handleClick);
    }

    handleClick = () =>{
        this.count ++;
        this.render();
    };

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <section>
                <p>${this.count}</p>
            </section>
            `;
            this.shadowRoot.appendChild(this.button);
        }
    }
}

customElements.define("my-counter",MyCounter);
export default MyCounter;