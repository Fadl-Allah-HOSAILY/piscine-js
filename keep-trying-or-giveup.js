function retry(count, callback) {
    return async function (...args) {
        for (let i = 0; i < count + 1; i++) {
            try {
                return await callback(...args)
            } catch (error) {
                if (i === count){
                    throw error
                }
            }
        }
    }
}

function timeout(delay, callback){
    return async function(...args){
        const promesseCallback = callback(...args);
        const promesseTimeout = new Promise((_, reject) =>  {
            setTimeout(() => {
                reject(Error('timeout'))
            }, delay)
        })
        return Promise.race([promesseCallback, promesseTimeout])
    }
}*

