class Header {
    constructor({ $target, path }) {
        this.$target = $target;
        this.path = path;

        this.$headerBg = document.createElement('div');
        this.$headerBg.className = 'header-bg';
        this.$headerWrap = document.createElement('section');
        this.$headerWrap.className = 'header-wrap';
        this.$home = document.createElement('a');
        this.$home.setAttribute('href', './index.html');
        this.$home.className = 'home';
        this.$hamburger = document.createElement('section');
        this.$hamburger.className = 'hamburger-open';
        this.$nav = document.createElement('ul');
        this.$nav.className = 'nav';
        this.$profile = document.createElement('span');
        this.$profile.className = 'profile';
        this.$path = document.createElement('p');
        this.$path.className = 'path';
        this.$navLi;

        this.$target.append(this.$headerBg, this.$path);
        this.$headerBg.append(this.$headerWrap, this.$hamburger);
        this.$headerWrap.append(this.$home, this.$nav, this.$profile);

        this.isOpen = false;
        this.$hamburger.addEventListener('click', this.handleHamburger.bind(this))
        this.render()
    }

    handleHamburger() {
        console.log(this);
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
        this.$home.innerText = 'catch cat';

        this.$hamburger.innerHTML = `
            <div class='btn_line'></div>
            <div class='btn_line'></div>
            <div class='btn_line'></div>
        `
        this.$nav.innerHTML = `
            <li data-path='1'><a href='./all.html'>ALL</a></li>
            <li data-path='2'><a href='./category.html'>CATEGORY</a></li>
            <li data-path='3'><a href='./breed.html'>BREEDS</a></li>
            <li data-path='4'><a href='./vote.html'>VOTE</a></li>
            <li data-path='5'><a href='./favorite.html'>FAVORITE</a></li>
        `
        this.$navLi = this.$nav.querySelectorAll('li');
    }

    pointPath() {
        this.$navLi.forEach(li => {
            if (Number(li.dataset.path) === this.path) {
                //nav 
                li.classList.add('active');
                //path 
                const currentPath = li.firstChild.innerText;
                this.$path.innerText = currentPath;
            } else {
                li.classList.remove('active');
            }
        })
    }

    setState(nextPath) {
        this.path = nextPath;
        this.pointPath();
    }
};

export default Header;
