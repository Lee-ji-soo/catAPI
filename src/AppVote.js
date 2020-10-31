import { Header, DarkMode, Random } from './components';
import { api } from './utils/api.js';

class AppVote {
    constructor({ $target }) {
        this.$target = $target;
        this.$header = document.createElement('header');
        this.$main = document.createElement('main');
        this.$target.append(this.$header, this.$main);

        this.data = {
            cats: {},
            vote: []
        };

        this.state = {
            id: '',
            user: 'soo',
            path: 4,
        };

        this.init();
    }

    mountComponent() {
        this.random = new Random({
            $target: this.$main,
            data: this.data.cats,
            onClickLike: (id) => { this.onClickLike(id) },
            onDeleteLike: (id) => { this.onDeleteLike(id) },
        })

        this.header = new Header({
            $target: this.$header
        })

        this.darkMode = new DarkMode({
            $target: this.$target,
        })
    }

    init() {
        this.mountComponent();
        this.fetchRandom();
        this.setPath();
    }

    setPath() {
        this.header.setState(this.state.path);
    }

    onClickLike(id) {
        this.fetchPostVote({ ...this.state, id });
    }

    async fetchRandom() {
        const data = await api.fetchRandom();
        this.data.cats = data;
        await this.random.setState(this.data.cats);
    }

    async fetchPostVote(state) {
        await api.fetchPostVote(state);
    }
};

export default AppVote;
