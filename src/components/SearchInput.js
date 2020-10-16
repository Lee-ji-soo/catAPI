class SearchInput {
    constructor({ $target }) {
        this.$target = $target;

        this.$searchInput = document.createElement("input");
        this.$searchInput.className = "SearchInput";
        this.$searchInput.placeholder = "고양이를 검색해보세요";

        this.$searchRandom = document.createElement('button');
        this.$searchRandom.className = "searchRandom";
        this.$searchRandom.innerText = "랜덤 검색!";

        this.$target.appendChild(this.$searchInput);
        this.$target.appendChild(this.$searchRandom);

        this.render();
    }

    render() {

    }
}
export default SearchInput;
