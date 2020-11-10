import { debouncing, masonryGrid } from '../utils';

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

        //각 고양이 이미지
        this.$cat;
        this.observer = new IntersectionObserver((item) => { this.observe(item, this.lazyloading) })
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
        this.$lastChild = this.$searchResult.lastChild;
        this.addClickEvt();

        this.$cat.forEach(($item) => {
            this.observer.observe($item);
        })
        this.lastChildObserver();
    }

    lazyloading(item) {
        item.target.querySelector('img').src = item.target.querySelector('img').dataset.src;
    }

    observe(items, lazyloading) {
        items.forEach(item => {
            if (item.isIntersecting) {
                debouncing(lazyloading, item);
                masonryGrid(this.$searchResult, item.target)
            }
        })
    }

    observeLastChild(item, bottom) {
        if (item[0].isIntersecting) {
            debouncing(bottom);
        }
    }

    lastChildObserver() {
        let options = {
            threshold: 1.0
        }
        if (this.$lastChild) {
            this.observerLastChild = new IntersectionObserver((item) => { this.observeLastChild(item, this.onBottom) }, options)
            this.observerLastChild.observe(this.$lastChild);
        }

    }

    addClickEvt() {
        this.$cat.forEach((cat, index) => {
            cat.addEventListener("click", () => {
                this.handleClick(this.data[index]);
            });
        });
    }

    handleClick(clickedItem) {
        if (this.onClickImg) {
            this.onClickImg(clickedItem)
            return;
        }
    }
}

export default SearchResult;
