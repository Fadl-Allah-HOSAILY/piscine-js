function interpolation(steps, start, end, callback, duration){
    const distance = (end - start) / steps
    const delay = duration / steps
    for (let i = 0; i < steps; i++) {
        const x = start + i * distance
        const y = i * delay
        setTimeout(() => {
            callback([x, y])
        }, y)
    }
}