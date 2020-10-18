import { Select, SearchResult, Header, DarkMode } from './components';
import { api } from './utils/api.js';
import { breeds, categories } from './utils/select';

class App {
    constructor({ $target }) {
        this.$target = $target;
        this.$header = document.createElement('header');
        this.$selectWrap = document.createElement('div');
        this.$main = document.createElement('main');
        this.$target.append(this.$header, this.$main);

        this.state = {
            loading: false
        }

        this.data = {
            items: [],
            breed: 'None',
            category: 0,
        }

        this.searchResult;
        this.selectBreed;
        this.selectCategory;
        this.onSelect;

        this.init();
    };

    setState(nextData) {
        this.data = {
            ...this.data,
            items: nextData.items
        }
        this.searchResult.setState(this.data);
    };

    mountHeader() {
        this.header = new Header({
            $target: this.$header
        })
    }

    mountSelect() {
        this.selectBreed = new Select({
            $app: this.$target,
            $target: this.$selectWrap,
            selections: breeds,
            title: 'Breed',
            onSelect: this.onSelect
        })

        this.selectCategory = new Select({
            $app: this.$target,
            $target: this.$selectWrap,
            selections: categories,
            title: 'Category',
            onSelect: (selected) => { this.onSelect(selected) },
        })
    };

    mountResult() {
        this.searchResult = new SearchResult({
            $target: this.$main,
            data: this.data,
        });
    }

    mountDarkMode() {
        this.darkMode = new DarkMode({
            $target: this.$header,
        })
    }

    mountComponent() {
        this.mountHeader();
        this.$header.appendChild(this.$selectWrap);
        this.mountSelect();
        this.mountResult();
        this.mountDarkMode();
    }

    init() {
        this.mountComponent();
        this.fetchCat();
    };

    onSelect(selected) {
        this.data.category = selected;
        this.fetchSelect({ data: this.data })
    }

    async fetchCat() {
        const cats = await api.fetchCats();
        await this.setState({
            ...this.data,
            items: cats ? cats : []
        });
    }

    async fetchSelect({ data }) {
        const cats = await api.fetchSelect(data);
        await this.setState({
            ...this.data,
            items: cats ? cats : []
        });
    }

}
export default App;

