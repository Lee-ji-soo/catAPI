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
        this.data = nextData.items;
        console.log(this.data);
        this.render();
    }

    render() {
        const htmlStr = this.data
            .map(cat => `<li class='item'>
                    <div style="background-image:url('${cat.url}')"></div>
                  </li>`)
            .join('');

        this.$searchResult.innerHTML = htmlStr;
    }

}

export default SearchResult;
