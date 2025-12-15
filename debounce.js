function debounce(func, delay){
    let timer
    return function (...args){
        clearTimeout(timer)
        timer = setTimeout(() => {
            func(...args)
        }, delay)
    }
}

function opDebounce(func, delay, leading){
        let timer
        return function(...args){
            if (leading) {
                if (timer === undefined){
                    func(...args)
                    timer = setTimeout(() => {
                        timer = undefined
                    }, delay)
                }
            }else {
                debounce(func, delay)
            }
        }
}

    // --- Debounce function ---
    function debounce(func, delay) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // --- Actual handler ---
    function handleInput(event) {
        document.getElementById("result").textContent =
            "Searching for: " + event.target.value;
    }

    // Wrap handler with debounce (300ms delay)
    const debouncedInput = debounce(handleInput, 300);

    // Attach to input field
    document.getElementById("searchInput").addEventListener("input", debouncedInput);


