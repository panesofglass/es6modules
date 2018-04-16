export class FancyButton extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.innerHTML = `
        <button>
            <slot></slot>
        </button>
        `
    }
}
window.customElements.define('fancy-button', FancyButton)