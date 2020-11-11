import { RollingText, Eye } from '../components';

class App {
    constructor({ $target }) {
        this.$target = $target;
        this.$h1 = document.createElement('h1');
        this.$cat = document.createElement('div');
        this.$cat.className = 'cat';
        this.$cat.style.backgroundImage = "url('/src/assets/cat2.png')";
        this.$target.append(this.$h1, this.$cat);

        this.eye;

        this.init();
        this.renderCatEye();
    }

    renderCatEye() {
        for (let i = 0; i < 2; i++) {
            this.eye = new Eye({
                $cat: this.$cat,
            });
        }
    }

    init() {
        this.$h1.innerHTML = '<a href="/all.html">CATCH CAT </a>';
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
