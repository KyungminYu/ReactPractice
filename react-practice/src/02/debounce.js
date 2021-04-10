export function debounce(func, delay) {
    let inDebounce;
    return function(...args) {
        if (inDebounce) {
            clearTimeout(inDebounce);
        }
        inDebounce = setTimeout(
            () => func(...args),
            delay
        )
    }
}

const logging = debounce(val => console.log(val), 100);

logging('a');
logging('b');
logging('c');