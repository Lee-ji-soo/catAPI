const mansonaryGrid = (container, item) => {
    const rowHeight = parseInt(window.getComputedStyle(container).getPropertyValue('grid-auto-rows'));
    const rowGap = 10;
    const rowSpan = Math.floor((item.querySelector('img').offsetHeight) / (rowHeight + rowGap));
    // const rowSpan = Math.ceil((item.querySelector('img').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = `span ${rowSpan + 1}`;
}

export { mansonaryGrid };

