class Random {
    constructor({ $target, data, onClickLike }) {
        this.$target = $target;
        this.data = data;
        this.onClickLike = onClickLike;

        //render random
        this.$random = document.createElement('div');
        this.$random.className = "random";
        this.$target.appendChild(this.$random);

        this.$img;
        this.$heart;
    }

    setState(nextData) {
        this.data = nextData;
        this.render();
    }

    render() {
        const { 0: { id, url } } = this.data;
        const htmlStr = `
            <div class='imgwrap'>
                 <img data-src=${url} src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2ChCI%2FbtqvPbkYHXS%2FBjoh4TSXHv66xRoiu6mrr1%2Fimg.gif' alt=${id}/>
            </div>
            <button id='heart'>❤︎</button>
            `

        //selector
        this.$random.innerHTML = htmlStr;
        this.$img = this.$random.querySelector('img');
        this.$heart = this.$random.querySelector('#heart');
        this.$heart.addEventListener('click', () => { this.handleClick(id) });

        //observer
        this.observer = new IntersectionObserver((item) => { this.observe(item) });
        this.observer.observe(this.$img);
    }

    handleClick(id) {
        this.onClickLike(id);

        this.$heart.style.color = 'red';
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

export default Random;
