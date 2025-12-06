export function getArchitects(){
    let architects = document.querySelectorAll('a')
    let nonArchitects = document.querySelectorAll('span')
    let arrArchitects = [...architects]
    let arrNonArchitects = [...nonArchitects]
    return [arrArchitects,arrNonArchitects]
}

export function getClassical(){
    let classical = document.querySelectorAll('a.classical')
    let nonClassical = document.querySelectorAll('a:not(a.classical)')
    let arrClassical = [...classical]
    let arrNonClassical = [...nonClassical]
    return [arrClassical, arrNonClassical]
}

export function getActive(){
    let active = document.querySelectorAll('a.classical.active')
    let nonActive = document.querySelectorAll('a.classical:not(a.classical.active)')
    let arrActive = [...active]
    let arrNonActive = [...nonActive]
    return [arrActive, arrNonActive]
}

export function getBonannoPisano(){
    let bonannoPisano = document.getElementById('BonannoPisano')
    let activeClassical = document.querySelectorAll('a.classical.active')
    let arrActiveClassical = [...activeClassical]
    return [bonannoPisano, arrActiveClassical]
}