const debouncing = (action, item = null) => {
    let timer = false;
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        action(item);
    }, 2000);
}

export { debouncing };
