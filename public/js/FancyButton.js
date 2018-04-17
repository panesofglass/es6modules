export class FancyButton extends HTMLElement {
    static get observedAttributes() {
        return ["height", "width"]
    }

    constructor() {
        super()

        const style = document.createElement("style")

        const slot = document.createElement("slot")
        const button = document.createElement("button")
        button.appendChild(slot)

        const shadow = this.attachShadow({mode: "open"})
        shadow.appendChild(style)
        shadow.appendChild(button)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Button attriubte ${name} changed from ${oldValue} to ${newValue}`)
        updateStyle(this)
    }
}

window.customElements.define('fancy-button', FancyButton)

function updateStyle(elem) {
    const shadow = elem.shadowRoot
    const childNodes = shadow.childNodes
    for (let i = 0; i < childNodes.length; i++) {
        if (childNodes[i].nodeName === "STYLE") {
            childNodes[i].textContent = `button { height: ${elem.getAttribute("height") + "px"}; width: ${elem.getAttribute("width") + "px"}; }`
        }
    }
}