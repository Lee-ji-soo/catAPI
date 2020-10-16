class SearchResult {

    constructor({ $target, data }) {
        this.data = data;
        this.$target = $target;

        //render cats
        this.$searchResult = document.createElement("ul");
        this.$searchResult.className = "SearchResult";
        this.$target.appendChild(this.$searchResult);
    }

    setState(nextData) {
        this.render();
    }

    render() {
        const htmlStr = this.data
            .map(cat => `<li class='item'>
                    <img src=${cat.url} alt=${cat.name}/>
                  </li>`)
            .join('');
    }

}

export default SearchResult;
