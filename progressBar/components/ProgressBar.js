export class ProgressBar extends HTMLElement {
    static css = `
    :host {
        display: "block";
        height: "40px";
        width: "250px";
        background: "#eeeeee";
        border-radius: "4px";
        overflow: "hidden";
    }
    `
    constructor() {
        super()
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        const style = document.createElement("style");
        const fill = document.createElement("div");
        fill.classList.add("fill");

        this.shadowRoot.appendChild(style, fill);
        //this.shadowRoot.innerHTML = 'test';
    }
}
