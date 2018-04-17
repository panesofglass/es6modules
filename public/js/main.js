import { addContent, addFancyView } from "./lib.js"

const onDOMContentLoaded = () => {
    addContent("Hello!")
    addFancyView()

    setTimeout(() => {
        const view = document.querySelector("fancy-view")
        view.setAttribute("button-width", "200")
    }, 5000)
}

window.addEventListener("DOMContentLoaded", onDOMContentLoaded, false)