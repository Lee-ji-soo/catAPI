class SearchResult {

    constructor({ $target, data, onBottom }) {
        this.data = data;
        this.$target = $target;
        this.$observer;
        this.onBottom = onBottom;
        //render cats
        this.$searchResult = document.createElement("ul");
        this.$searchResult.className = "SearchResult";
        this.$target.appendChild(this.$searchResult);
        this.page = data.page
    }

    setState(nextData) {
        this.data = nextData.items;
        this.page = nextData.page;
        this.render();
    }

    render() {
        const htmlStr = this.data
            .map(cat => `<li class='item'>
                    <div style="background-image:url('${cat.url}')"></div>
                  </li>`)
            .join('');

        if (this.page === 1) {
            this.$searchResult.innerHTML = htmlStr;
        } else {
            this.$searchResult.insertAdjacentHTML('beforeEnd', htmlStr);
        }

        this.$observer = this.$searchResult.lastElementChild;
        this.observeLastChild();
    }

    observeLastChild() {
        let options = {
            rootMargin: "50px",
            threshold: 1
        };
        if (this.$observer) {
            this.observer = new IntersectionObserver(this.detectBottom.bind(this), options)
            this.observer.observe(this.$observer);
        }
    }

    detectBottom(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.onBottom();
            }
        })
    }
}

export default SearchResult;
