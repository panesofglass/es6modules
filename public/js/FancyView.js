import {FancyButton} from './FancyButton.js'
export class FancyView extends HTMLElement {
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'open'})
        shadowRoot.innerHTML = `
            <article>This is my view!</article>
            <fancy-button>This is my fancy button</fancy-button>
        `
    }
}
window.customElements.define('fancy-view', FancyView)