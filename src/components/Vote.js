class Vote {
    constructor({ $target, data, onClickLike, onLoadNext }) {
        this.$target = $target;
        this.data = data;
        this.onClickLike = onClickLike;
        this.onLoadNext = onLoadNext;

        //render random
        this.$random = document.createElement('div');
        this.$random.className = "random";

        this.$target.append(this.$random);
        this.$img;
        this.$heart;
        this.$next;
    }

    setState(nextData) {
        this.data = nextData;
        this.render();
    }

    render() {
        const { 0: { id, url } } = this.data;
        const htmlStr = `
            <div class='img_wrap'>
                 <img data-src=${url} src='https://raw.githubusercontent.com/Lee-ji-soo/catAPI/main/src/assets/imageLoading.gif' alt=${id}/>
            </div>
            <div class='btn_wrap'>
                <button class='btn' id='heart'>❤︎</button>
                <button class='btn' id='nextRandom'>NEXT IMG</button>
            </div>
            `

        //selector
        this.$random.innerHTML = htmlStr;
        this.$img = this.$random.querySelector('img');
        this.$heart = this.$random.querySelector('#heart');
        this.$next = this.$random.querySelector('#nextRandom');
        this.$random.addEventListener('click', (e) => { this.handleClick(e, id) });

        //observer
        this.observer = new IntersectionObserver((item) => { this.observe(item) });
        this.observer.observe(this.$img);
    }

    handleClick(e, id) {
        if (e.target === this.$heart) {
            this.onClickLike(id);
            this.$heart.style.color = 'red';
        } else if (e.target === this.$next) {
            this.onLoadNext();
        }
    }

    lazyloading(item) {
        item.target.src = item.target.dataset.src;
    }

    observe(img) {
        img.forEach(item => {
            if (item.isIntersecting) {
                this.lazyloading(item);
            }
        })
    }
}

export default Vote;
