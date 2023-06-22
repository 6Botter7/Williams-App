export class Loader extends HTMLElement {

    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    get shadowDom() {
        return true;
    }

    constructor() {
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback() {
        this.shadowRoot.innerHTML = await fetch(this.html).then(result => result.text());
        console.log("Loader connected");
    }

    async disconnectedCallback() {
        console.log("Loader disconnected");
    }
    
}

customElements.define("my-loader", Loader);