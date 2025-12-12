function throttle(func, delay) {
    let wait = false
    return function (...args) {
        if (wait) return 
        func(...args)
        wait = true
        setTimeout(() => {
            wait = false
        }, delay)
    }
}

