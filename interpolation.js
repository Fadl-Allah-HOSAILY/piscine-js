function interpolation(steps, start, end, callback, duration){
    const distance = (end - start) / steps
    const delay = duration / steps
    for (let i = 0; i < steps; i++) {
        setTimeout(() => {
            const x = i * delay
            const y = start + i * distance
            callback([x, y])
        }, x)
    }
}