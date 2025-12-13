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

function opThrottle(func, delay, opts = {}) {
    let timer 
    return function (...args) {
        if (!timer) {
            if (opts.leading) {
                func(...args)
            }
            timer = setTimeout(() => {
                timer = null
                if (!opts.leading) {
                    func(...args)
                }
            }, delay)
        }
    }
}