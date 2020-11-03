class Favorite {
    constructor({ $target, data, onDelete }) {
        this.data = data;
        this.$target = $target;
        this.onDelete = onDelete;

        //render cats
        this.$favoriteWrap = document.createElement('section');
        this.$favoriteWrap.className = 'result-wrap';
        this.$favorite = document.createElement("ul");
        this.$favorite.className = "SearchResult";
        this.$favoriteWrap.appendChild(this.$favorite);
        this.$target.appendChild(this.$favoriteWrap);

        this.$cat;
        this.$deleteBtn;

        this.observer = new IntersectionObserver((items) => { this.observe(items, this.lazyloading) })
    }

    lazyloading(item) {
        item.target.querySelector('img').src = item.target.querySelector('img').dataset.src;
    }

    observe(items, lazyLoading) {
        items.forEach(item => {
            if (item.isIntersecting) {
                lazyLoading(item);
            }
        })
    }
    setState(nextData) {
        this.data = nextData;
        this.render();
    }

    render() {
        const htmlStr = this.data
            .map((cat, index) => `
                <li class='item' data-index=${index}>
                     <img data-src=${cat.image.url} alt=${cat.image.id} 
                        src='https://raw.githubusercontent.com/Lee-ji-soo/catAPI/main/src/assets/imageLoading.gif'/>
                    <button data-id=${cat.id} class='delete'>X</button>
                </li>`)
            .join('');

        this.$favorite.innerHTML = htmlStr;
        this.$cat = this.$favorite.querySelectorAll('.item');
        this.$deleteBtn = this.$favorite.querySelectorAll('.delete');

        this.$cat.forEach(($item) => {
            this.observer.observe($item);
        })

        this.$deleteBtn.forEach(btn => { btn.addEventListener('click', (e) => { this.handleClick(e, this.onDelete) }) });
    }

    handleClick(e, onDelete) {
        const { target: { dataset: { id } } } = e;
        onDelete(id);
    }
}

export default Favorite;
