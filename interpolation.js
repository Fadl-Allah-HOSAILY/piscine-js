function interpolation(steps, start, end, callback, duration){
    const distance = (end - start) / steps
    const delay = duration / steps
    for (let i = 0; i < steps; i++) {
         const x = start + distance * i
        const y = delay * (i + 1 )
        setTimeout(() => {
            callback([x, y])
        }, y)
    }
}