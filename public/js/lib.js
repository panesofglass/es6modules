import { FancyView } from "./FancyView.js"

const addContent = (text) => {
    const p = document.createElement("p")
    p.innerText = text
    const fragment = document.createDocumentFragment()
    fragment.appendChild(p)
    document.body.appendChild(fragment)
}

const addFancyView = () => {
    const view = document.createElement("fancy-view")
    const fragment = document.createDocumentFragment()
    fragment.appendChild(view)
    document.body.appendChild(fragment)
}

export { addContent, addFancyView }