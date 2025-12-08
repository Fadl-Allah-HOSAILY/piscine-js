export function generateLetters(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0; i < 120; i++) {
        const div = document.createElement("div")
        const random = Math.floor(Math.random() * 26)
        const alpha = alphabet[random]
        div.append(alpha)
        div.style.fontSize = i+11 + "px"
        if (i < 40) {
            div.style.fontWeight = "300"
        }
        if (i > 40 && i < 80) {
            div.style.fontWeight = "400"
        }
        if (i > 80
        ) {
            div.style.fontWeight = "600"
        }
        document.body.append(div)
    }
}