function getArchitects(){
    const architects = [...document.querySelectorAll("a")]
    const nonArchitects = [...document.querySelectorAll("body *:not(a)")];
    return [architects,nonArchitects]
}

function getClassical(){
    const architects = getArchitects()
    const classical = architects.forEach(elem =>{
        elem.classList.contains("classical")
    })
    const nonClassical = architects.forEach(elem =>{
        !elem.classList.contains("classical")
    })
    return [classical, nonClassical]
}

function getActive(){
    const architects = getArchitects()
    const active = architects.forEach(elem =>{
        elem.classList.contains("active")
    })
    const nonActive = architects.forEach(elem =>{
        !elem.classList.contains("active")
    })
    return [active, nonActive]
}

function getBonannoPisano(){
    const bonannoPisano = document.getElementById("BonannoPisano")
    const classical = architects.forEach(elem =>{
        elem.classList.contains("classical")
    })
    const activeClassical = classical.forEach(elem =>{
        elem.classList.contains("active")
    })
    const architects = getArchitects()
    [bonannoPisano, activeClassical]
}