class Header {
    constructor({ $target }) {
        this.$target = $target;
        this.$nav = document.createElement('ul');
        this.$nav.className = 'nav';
        this.$target.append(this.$nav);

        this.render()
    }
    render() {
        this.$nav.innerHTML = `
            <li><a href='/index.html'>CATCH CAT</a></li>
            <li><a href='/category.html'>CATEGORY</a></li>
            <li><a href='/breed.html'>BREEDS</a></li>
            <li><a href='/vote.html'>VOTE</a></li>
            <li><a href='/favorite.html'>FAVORITE</a></li>
        `
    }
};

export default Header;
