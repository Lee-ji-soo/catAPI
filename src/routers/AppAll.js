import { SearchResult, Header, DarkMode } from '../components';
import { api } from '../utils/api.js';

class AppAll {
    constructor({ $target }) {
        this.$target = $target;
        this.$header = document.createElement('header');
        this.$selectWrap = document.createElement('div');
        this.$main = document.createElement('main');
        this.$target.append(this.$header, this.$main);
        this.$main.appendChild(this.$selectWrap);

        this.state = {
            loading: false,
            onCategory: false,
            onBreed: false,
            onNone: true,
            clicked: {},
            infoIsVisible: false,
            path: 1,
        }

        this.data = {
            items: [],
            page: 1,
            category: 0,
            page: 1,
        }
        this.init();
    };

    setState(nextData) {
        this.data = {
            ...this.data,
            items: nextData.items
        }
        this.searchResult.setState({
            ...this.data,
            items: nextData.items ? nextData.items : [],
            page: this.data.page
        });
    };

    mountComponent() {
        this.header = new Header({
            $target: this.$header,
            path: this.state.path
        })

        this.darkMode = new DarkMode({
            $target: this.$target,
        })

        this.searchResult = new SearchResult({
            $target: this.$main,
            data: this.data.items,
            onBottom: () => { this.onBottom(this.fetchMoreCat) },
        });
    }

    init() {
        this.mountComponent();
        this.fetchCat({ data: this.data });
        this.setPath();
    };

    onBottom() {
        this.data.page = this.data.page + 1;
        this.fetchMoreCat(this.data)
    }

    setPath() {
        this.header.setState(this.state.path);
    }

    async fetchMoreCat(data = this.data, state = this.state) {
        const cats = await api.fetchMoreCat(data, state);
        if (cats.length > 1) {
            this.searchResult.setState({
                ...this.data,
                items: cats ? cats : [],
                page: this.data.page
            });
        }
    }

    async fetchCat(data = this.data) {
        const cats = await api.fetchCats(data);
        await this.setState({
            ...this.data,
            items: cats ? cats : []
        });
        await console.log(cats);
    }
}
export default AppAll;

