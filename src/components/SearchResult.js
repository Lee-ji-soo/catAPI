import { masonryGrid, debouncing } from '../utils';

class SearchResult {

    constructor({ $target, data, onBottom, onClickImg }) {
        this.data = data;
        this.$target = $target;
        this.$observer;
        this.onBottom = onBottom;
        this.onClickImg = onClickImg;

        //render cats
        this.$resultWrap = document.createElement('section');
        this.$resultWrap.className = 'result-wrap';
        this.$searchResult = document.createElement("ul");
        this.$searchResult.className = "SearchResult";
        this.$target.appendChild(this.$resultWrap);
        this.$resultWrap.appendChild(this.$searchResult);
        this.page = data.page;

        let options = {
            root: this.$resultWrap,
            rootMargin: '0px 0px -200px 0px',
            threshold: 1.0
        }

        //각 고양이 이미지
        this.$cat;
        this.observer = new IntersectionObserver((items) => { this.observe(items, this.lazyloading) }, options)
    }

    lazyloading(item) {
        item.target.querySelector('img').src = item.target.querySelector('img').dataset.src;
    }

    observe(items, lazyLoading) {
        items.forEach(item => {
            let dataIndex = Number(item.target.dataset.index);

            if (item.isIntersecting) {
                masonryGrid(this.$searchResult, item.target);
                debouncing(lazyLoading, item);

                if (dataIndex + 1 === this.data.length) {
                    this.onBottom();
                }
            }
        })
    }

    setState(nextData) {
        this.page = nextData.page;

        if (this.page !== 1) {
            const newArray = this.data.concat(nextData.items);
            this.data = Array.from(new Set(newArray));
        } else {
            this.data = nextData.items
        }
        this.render();
    }

    render() {
        let htmlStr;
        if (this.data.length === 0) {
            htmlStr = `<div id='empty'>
                            <span>카테고리를 선택해 주세냐옹<span>
                       </div>`
        } else {
            htmlStr = this.data
                .map((cat, index) => `<li class='item' data-index=${index}>
                    <img data-src=${cat.url} alt=${cat.name} 
                    src='https://raw.githubusercontent.com/Lee-ji-soo/catAPI/main/src/assets/imageLoading.gif'/>
                  </li>`)
                .join('');
        }

        if (this.page === 1) {
            this.$searchResult.innerHTML = htmlStr;
        } else if (this.page > 1) {
            this.$searchResult.insertAdjacentHTML('beforeEnd', htmlStr);
        }

        this.$cat = this.$searchResult.querySelectorAll('.item');
        this.addClickEvt();

        this.$cat.forEach(($item) => {
            this.observer.observe($item);
        })
    }

    addClickEvt() {
        this.$cat.forEach((cat, index) => {
            cat.addEventListener("click", () => {
                this.handleClick(this.data[index]);
            });
        });
    }

    handleClick(clickedItem) {
        this.onClickImg(clickedItem)
    }
}

export default SearchResult;
