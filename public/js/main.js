import { addContent, addFancyView } from "./lib.js"

const onDOMContentLoaded = () => {
    addContent("Hello!")
    addFancyView()
}

window.addEventListener("DOMContentLoaded", onDOMContentLoaded, false)