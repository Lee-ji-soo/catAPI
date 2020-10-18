import { Select, SearchResult, Header } from './components';
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
            page: 1,
            keyword: ''
        }

        this.searchResult;
        this.selectBreed;
        this.selectCategory;

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
            selectios: breeds,
            title: 'Breed'
        })

        this.selectCategory = new Select({
            $app: this.$target,
            $target: this.$selectWrap,
            selectios: categories,
            title: 'Category'
        })
    };

    mountResult() {
        this.searchResult = new SearchResult({
            $target: this.$main,
            data: this.data,
        });
    }

    mountComponent() {
        this.mountHeader();
        this.$header.appendChild(this.$selectWrap);
        this.mountSelect();
        this.mountResult();
    }

    init() {
        this.mountComponent();
        this.fetchCat();
    };

    async fetchCat() {
        const cats = await api.fetchCats();
        await this.setState({
            ...this.data,
            items: cats ? cats : []
        });
    }

}
export default App;

