const masonryGrid = (container, item) => {
    const rowHeight = parseInt(window.getComputedStyle(container).getPropertyValue('grid-auto-rows'));
    const rowGap = 10;
    const rowSpan = Math.floor((item.querySelector('img').offsetHeight) / (rowHeight + rowGap));
    item.style.gridRowEnd = `span ${rowSpan + 2}`;
}

export { masonryGrid };
