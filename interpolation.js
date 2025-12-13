function interpolation(steps, start, end, callback, duration){
    const distance = (end - start) / steps
    const delay = duration / steps
    for (let i = 0; i < steps; i++) {
        const x = i * delay
        const y = start + i * distance
        setTimeout(() => {
            callback([x, y])
        }, x)
    }
}