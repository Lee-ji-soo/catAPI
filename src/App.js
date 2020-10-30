import { RollingText, Cat } from './components';

class App {
    constructor({ $target }) {
        this.$target = $target;
        this.$h1 = document.createElement('h1');
        this.$target.append(this.$h1);
        this.totalCat = 10;


        this.init();
        this.renderCat();
    }

    renderCat() {
        let cat;
        for (let i = 0; i < this.totalCat; i++) {
            const width = Math.random() * 300;
            const left = Math.random() * 900;

            const top = Math.random() * 900;
            cat = new Cat({
                $target: this.$target,
                width: width,
                left: left,
                top: top,
            })
        }
    }

    init() {
        this.$h1.innerHTML = '<a href="/catch.html">CATCH CAT </a>';
        for (let i = 0; i < 2; i++) {
            this.mountRollingText(i);
        }
    }

    mountRollingText(i) {
        this.$rolling = document.createElement('section');
        this.$rolling.className = `section section${i + 1}`;
        this.$target.append(this.$rolling);

        let rollingText;
        for (let i = 0; i < 3; i++) {
            rollingText = new RollingText({
                $target: this.$rolling,
            })
        }
    }
};

export default App;
