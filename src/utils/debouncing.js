const debouncing = (lazyLoading, item) => {
    let timer = false;
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        lazyLoading(item);
    }, 1500);
}

export { debouncing };
