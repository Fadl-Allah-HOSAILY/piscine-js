function debounce(func, delay){
    let timer
    return function (...agrs){
        clearTimeout(timer)
        timer = setTimeout(() => {
            func(...atrgs)
        }, delay)
    }
}