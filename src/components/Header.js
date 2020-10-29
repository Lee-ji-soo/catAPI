class Header {
    constructor({ $target }) {
        this.$target = $target;
        this.$nav = document.createElement('ul');
        this.$hamburger = document.createElement('section');
        this.$hamburger.className = 'hamburger-open';
        this.$nav.className = 'nav';
        this.$navLi;
        this.$target.append(this.$hamburger, this.$nav);

        this.isOpen = false;

        this.$hamburger.addEventListener('click', this.handleHamburger.bind(this))

        this.render()
    }

    handleHamburger() {
        if (this.isOpen) {
            this.$hamburger.classList.remove('close');
            this.$nav.classList.remove('show');
            if (this.$navLi) {
                this.$navLi.forEach(li =>
                    li.classList.remove('show'))
            }
        } else {
            this.$hamburger.classList.add('close');
            this.$nav.classList.add('show');
            if (this.$navLi) {
                this.$navLi.forEach(li =>
                    li.classList.add('show'))
            }
        }
        this.isOpen = !this.isOpen;
    }

    render() {
        this.$hamburger.innerHTML = `
            <div class='btn_line'></div>
            <div class='btn_line'></div>
            <div class='btn_line'></div>
        `
        this.$nav.innerHTML = `
            <li><a href='/catch.html'>CATCH CAT</a></li>
            <li><a href='/category.html'>CATEGORY</a></li>
            <li><a href='/breed.html'>BREEDS</a></li>
            <li><a href='/vote.html'>VOTE</a></li>
            <li><a href='/favorite.html'>FAVORITE</a></li>
        `

        this.$navLi = this.$nav.querySelectorAll('li');
    }
};

export default Header;
