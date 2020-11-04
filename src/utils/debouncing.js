const debouncing = (action, item = null) => {
    let timer = false;
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        action(item);
    }, 1500);
}

export { debouncing };
