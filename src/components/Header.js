class Header {
    constructor({ $target }) {
        this.$target = $target;
        this.$nav = document.createElement('ul');
        this.$nav.className = 'nav';
        this.$header = document.createElement('h1');
        this.$header.className = 'app_title';
        this.$target.append(this.$header, this.$nav);

        this.render();
    }
    render() {
        this.$nav.innerHTML = `
            <li><a href='/index.html'>HOME</a></li>
            <li><a href='/category.html'>CATEGORY</a></li>
            <li><a href='/breed.html'>BREEDS</a></li>
            <li><a href='/vote.html'>VOTE</a></li>
            <li><a href='/favorite.html'>FAVORITE</a></li>
        `
        this.$header.innerText = 'CATCH CAT'
    }
};

export default Header;
