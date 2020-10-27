import { Header, DarkMode, Random } from './components';
import { api } from './utils/api.js';

class AppVote {
    constructor({ $target }) {
        this.$target = $target;
        this.$header = document.createElement('header');
        this.$main = document.createElement('main');
        this.$target.append(this.$header, this.$main);

        this.data = {}
        this.init();
    }

    mountComponent() {
        this.random = new Random({
            $target: this.$main,
            data: this.data,
            onClickRandom: this.onClickRandom
        })

        this.header = new Header({
            $target: this.$header
        })

        this.darkMode = new DarkMode({
            $target: this.$header
        })
    }

    init() {
        this.mountComponent();
        this.fetchRandom();
    }

    onClickRandom() {
        console.log('clicked');
    }

    async fetchRandom() {
        const data = await api.fetchRandom();
        this.data = data;
        await this.random.setState(this.data);
    }
};

export default AppVote;
