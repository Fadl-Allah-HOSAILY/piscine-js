function interpolation({ step, start, end, callback, duration }) {
    if (step <= 0) return;

    const stepSize = (end - start) / step;
    const delay = duration / step;

    for (let i = 0; i < step; i++) {
        const x = start + stepSize * i;
        const y = delay * (i + 1);

        setTimeout(() => {
            callback([x, y]);
        }, y);
    }
}