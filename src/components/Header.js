class Header {
    constructor({ $target }) {
        this.$target = $target;
        this.$header = document.createElement('h1');
        this.$header.className = 'app_title';
        this.$target.appendChild(this.$header);

        this.render();
    }
    render() {
        this.$header.innerText = 'LOVELY CAT'
    }
};

export default Header;
