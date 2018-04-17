import {FancyButton} from './FancyButton.js'

export class FancyView extends HTMLElement {
    static get observedAttributes() {
        return ["button-height", "button-width"]
    }

    constructor() {
        super()

        const article = document.createElement("article")
        article.textContent = "This is my view!"

        const button = document.createElement("fancy-button")
        button.setAttribute("height", "100")
        button.setAttribute("width", "100")
        button.textContent = "This is my fancy button"

        const shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.appendChild(article)
        shadowRoot.appendChild(button)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const shadow = this.shadowRoot
        if (name === "button-height") {
            const button = shadow.querySelector("fancy-button")
            button.setAttribute("height", newValue)
        }
        if (name === "button-width") {
            const button = shadow.querySelector("fancy-button")
            button.setAttribute("width", newValue)
        }
    }
}

window.customElements.define('fancy-view', FancyView)