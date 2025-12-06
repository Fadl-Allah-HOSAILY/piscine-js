export function getArchitects(){
    let architects = [...document.getElementsByTagName('a')];
    let nonArchitects = [...document.querySelectorAll("span")]
    return [architects,nonArchitects]
}

export function getClassical(){
    let architects = getArchitects()
    let classical = architects.filter(elem =>{
        elem.classList.contains("classical")
    })
    let nonClassical = architects.filter(elem =>{
        !elem.classList.contains("classical")
    })
    return [classical, nonClassical]
}

export function getActive(){
    let architects = getArchitects()
    let active = architects.filter(elem =>{
        elem.classList.contains("active")
    })
    let nonActive = architects.filter(elem =>{
        !elem.classList.contains("active")
    })
    return [active, nonActive]
}

export function getBonannoPisano(){
    let bonannoPisano = document.getElementById("BonannoPisano")
    let classical = architects.filter(elem =>{
        elem.classList.contains("classical")
    })
    let activeClassical = classical.filter(elem =>{
        elem.classList.contains("active")
    })
    let architects = getArchitects()
    return [bonannoPisano, activeClassical]
}