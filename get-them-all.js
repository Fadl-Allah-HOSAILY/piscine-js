function getArchitects(){
    const architects = [...document.getElementsByTagName('a')];
    const nonArchitects = [...document.querySelectorAll('body *:not(a)')].filter(el => el.tagName === 'SPAN')
    return [architects,nonArchitects]
}

function getClassical(){
    const architects = getArchitects()
    const classical = architects.filter(elem =>{
        elem.classList.contains("classical")
    })
    const nonClassical = architects.filter(elem =>{
        !elem.classList.contains("classical")
    })
    return [classical, nonClassical]
}

function getActive(){
    const architects = getArchitects()
    const active = architects.filter(elem =>{
        elem.classList.contains("active")
    })
    const nonActive = architects.filter(elem =>{
        !elem.classList.contains("active")
    })
    return [active, nonActive]
}

function getBonannoPisano(){
    const bonannoPisano = document.getElementById("BonannoPisano")
    const classical = architects.filter(elem =>{
        elem.classList.contains("classical")
    })
    const activeClassical = classical.filter(elem =>{
        elem.classList.contains("active")
    })
    const architects = getArchitects()
    return [bonannoPisano, activeClassical]
}