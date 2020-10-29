import { Header, Loading, DarkMode, Favorite } from './components';
import { api } from './utils/api.js';

class AppFav {
    constructor({ $target }) {
        this.$target = $target;
        this.$header = document.createElement('header');
        this.$main = document.createElement('main');
        this.$target.append(this.$header, this.$main);

        this.data = [];

        this.state = {
            loading: false,
            user: 'soo'
        };

        this.isLoading = new Loading({
            $target: this.$target,
            loading: this.state.loading
        })

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
            onDelete: (id) => { this.onDelete(id) }
        })
    }

    init() {
        this.mountComponent();
        this.fetchGetVote();
    }

    onDelete(id) {
        this.isLoading.setState(true);
        this.fetchDeleteVote(id);
    }

    setState(nextData) {
        this.data = nextData;
        this.favorite.setState(this.data);
    }

    async fetchGetVote() {
        const data = await api.fetchGetVote(this.state.user);
        await this.setState(data);
    }

    async fetchDeleteVote(id) {
        await api.fetchDeleteVote(id);
        await this.fetchGetVote();
        this.isLoading.setState(false);
    }
};

export default AppFav;
