import { Header, DarkMode, Favorite } from './components';
import { api } from './utils/api.js';

class AppFav {
    constructor({ $target }) {
        this.$target = $target;
        this.$header = document.createElement('header');
        this.$main = document.createElement('main');
        this.$target.append(this.$header, this.$main);

        this.state = {
            user: 'soo'
        };

        this.init();
    }

    mountComponent() {
        this.header = new Header({
            $target: this.$header
        })

        this.darkMode = new DarkMode({
            $target: this.$header
        })

        this.favorite = new Favorite({
            $target: this.$main,
            data: [],
        })
    }

    init() {
        this.mountComponent();
        this.fetchGetVote();
    }

    async fetchGetVote() {
        const data = await api.fetchGetVote(this.state.user);
        await this.favorite.setState(data);
    }
};

export default AppFav;
