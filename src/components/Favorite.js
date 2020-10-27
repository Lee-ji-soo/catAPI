class Favorite {
    constructor({ $target, data }) {
        this.data = data;
        this.$target = $target;

        //render cats
        this.$favorite = document.createElement("ul");
        this.$favorite.className = "favorite";
        this.$target.appendChild(this.$favorite);

        this.$cat;
        this.observer = new IntersectionObserver((items) => { this.observe(items) })
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
                        src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2ChCI%2FbtqvPbkYHXS%2FBjoh4TSXHv66xRoiu6mrr1%2Fimg.gif'/>
                </li>`)
            .join('');

        this.$favorite.innerHTML = htmlStr;
        this.$cat = this.$favorite.querySelectorAll('.item');

        this.$cat.forEach(($item) => {
            this.observer.observe($item);
        })
    }

    lazyloading(item) {
        item.target.querySelector('img').src = item.target.querySelector('img').dataset.src;
    }

    observe(items) {
        items.forEach(item => {
            if (item.isIntersecting) {
                this.lazyloading(item);
            }
        })
    }
}

export default Favorite;
