export function getArchitects(){
    let architects = [...document.getElementsByTagName('a')];
    let nonArchitects = [...document.querySelectorAll("span")]
    return [architects,nonArchitects]
}

export function getClassical(){
    let classical = document.querySelectorAll('a.classical')
    let nonClassical = document.querySelectorAll('a:not(a.classical)')
    return [classical, nonClassical]
}

export function getActive(){
    let active = document.querySelectorAll('a.classical.active')
    let nonActive = document.querySelectorAll('a.classical.a:not(a.active)')

    return [active, nonActive]
}

export function getBonannoPisano(){
    let bonannoPisano = document.getElementById("BonannoPisano")
    let activeClassical = document.querySelectorAll('a.classical.active')
    return [bonannoPisano, [activeClassical]]
}