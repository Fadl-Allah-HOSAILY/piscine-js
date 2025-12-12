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
    let timeout = null
    return function (...args) {
        if (!timeout) {
            if (opts.leading) {
                func(...args)
            }

            setTimeout(() => {
                if (!opts.leading) {
                    func(...args)
                }
                timeout = null
            }, delay)
        }
    }

}