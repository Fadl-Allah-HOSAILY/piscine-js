const colors = [
    "#FF0000",
    "#FF7F00",
    "#FFFF00",
    "#7FFF00",
    "#00FF00",
    "#00FF7F",
    "#00FFFF",
    "#007FFF",
    "#0000FF",
    "#7F00FF",
    "#FF00FF",
    "#FF007F",
    "#8B0000",
    "#FF4500",
    "#FFD700",
    "#ADFF2F",
    "#20B2AA",
    "#4682B4",
    "#6A5ACD",
    "#9932CC",
    "#DA70D6",
    "#C71585",
    "#708090",
    "#A0522D",
    "#2E8B57",
    "#800000"
]

export function compose() {
    document.addEventListener("keydown", k => {
        const key = k.key
        if (key >= "a" && key <= "z") {
            const asciiNbr = key.charCodeAt() - 97
            const div = document.createElement("div")
            div.classList.add("note")
            div.style.background = colors[asciiNbr]
            div.innerText = key
            document.body.append(div)
        } else if (key === "Escape") {
            const all = document.querySelectorAll('.note')
            all.forEach(element => element.remove())
        } else if (key === "Backspace") {
            document.body.lastElementChild.remove()
        }
    })
}
