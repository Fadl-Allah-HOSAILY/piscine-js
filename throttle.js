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

function opThrottle(func, delay, opts) {
    let wait = false
    let timer = null
    return function (...args) {
        if (!wait) {
            if (opts.leading) {
                func(...args)
            }
            wait = true
            timer = setTimeout(() => {
                if (!opts.leading) {
                    func(...args)
                }
                wait = false;
                timer = null;
            }, delay)
        }
    }
}