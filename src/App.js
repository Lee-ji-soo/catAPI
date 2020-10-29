import { RollingText } from './components';

class App {
    constructor({ $target }) {
        this.$target = $target;
        this.$h1 = document.createElement('h1');
        this.$target.append(this.$h1);
        this.init();
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
