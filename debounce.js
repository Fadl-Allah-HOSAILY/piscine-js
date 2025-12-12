function debounce(func, delay){
    let timer
    return function (...args){
        clearTimeout(timer)
        timer = setTimeout(() => {
            func(...args)
        }, delay)
    }
}

function opDebounce(func, delay, leading){
        let timer
        return function(...args){
            if (leading) {
                if (timer === undefined){
                    func(...args)
                    timer = setTimeout(() => {
                        timer = undefined
                    }, delay)
                }
            }else {
                debounce(func, delay)
            }
        }
}