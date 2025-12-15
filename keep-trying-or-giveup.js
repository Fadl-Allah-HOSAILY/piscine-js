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

