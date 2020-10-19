import { Select, SearchResult, Header, DarkMode } from './components';
import { api } from './utils/api.js';

class App {
    constructor({ $target }) {
        this.$target = $target;
        this.$header = document.createElement('header');
        this.$selectWrap = document.createElement('div');
        this.$main = document.createElement('main');
        this.$target.append(this.$header, this.$main);

        this.state = {
            loading: false,
            onCategory: false,
            onBreed: false,
            onNone: true,
        }

        this.breeds = [];
        this.categories = [];

        this.data = {
            items: [],
            breed: 'None',
            category: 0,
            page: 1,
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
        this.searchResult.setState({
            ...this.data,
            items: nextData.items ? nextData.items : [],
            page: this.data.page
        });
    };

    mountHeader() {
        this.header = new Header({
            $target: this.$header
        })
    }

    mountSelectBreed() {
        this.selectBreed = new Select({
            $app: this.$target,
            $target: this.$selectWrap,
            selections: this.breeds,
            title: 'Breed',
            onSelectBreed: (selected) => { this.onSelectBreed(selected) },
        })
    }

    mountSelectCategory() {
        this.selectCategory = new Select({
            $app: this.$target,
            $target: this.$selectWrap,
            selections: this.categories,
            title: 'Category',
            onSelectCategory: (selected) => { this.onSelectCategory(selected) },
        })
    };

    mountResult() {
        this.searchResult = new SearchResult({
            $target: this.$main,
            data: this.data,
            onBottom: () => { this.onBottom(this.fetchMoreCat) }
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
        this.mountResult();
        this.mountDarkMode();
    }

    mountInitialCat() {
        this.fetchInitialCategories();
        this.fetchInitialBreeds();
    }

    init() {
        this.mountInitialCat();
        this.mountComponent();
        this.fetchCat({ data: this.data });
    };

    onBottom() {
        this.data.page = this.data.page + 1;
        this.fetchMoreCat(this.data)
        console.log(this.data.page);
    }

    onSelectBreed(selected) {
        this.data.breed = selected;
        this.fetchBreed({ breed: this.data.breed });
    }

    onSelectCategory(selected) {
        this.data.category = selected;
        this.fetchCategory({ category: this.data.category })
    }

    async fetchMoreCat(data = this.data, state = this.state) {
        const cats = await api.fetchMoreCat(data, state);
        this.searchResult.setState({
            ...this.data,
            items: cats ? cats : [],
            page: this.data.page
        });
    }

    async fetchCat() {
        const cats = await api.fetchCats();
        await this.setState({
            ...this.data,
            items: cats ? cats : []
        });
    }

    async fetchInitialCategories() {
        const categories = await api.fetchInitialCategories();
        this.categories = categories;
        this.data.category = categories[0];
        this.mountSelectCategory();
    }

    async fetchInitialBreeds() {
        const breeds = await api.fetchInitialBreeds();
        this.breeds = breeds;
        this.data.breeds = breeds[0];
        this.mountSelectBreed();
    }

    async fetchBreed({ breed }) {
        this.state = {
            ...this.state,
            onCategory: false,
            onBreed: true,
            onNone: false,
        }
        this.data = {
            ...this.data,
            page: 1
        }
        const cats = await api.fetchBreed(breed);
        await this.setState({
            ...this.data,
            items: cats ? cats : []
        })
    }

    async fetchCategory({ category }) {
        this.state = {
            ...this.state,
            onCategory: true,
            onBreed: false,
            onNone: false,
        }
        this.data = {
            ...this.data,
            page: 1
        }
        const cats = await api.fetchCategory(category);
        await this.setState({
            ...this.data,
            items: cats ? cats : []
        });
    }

}
export default App;

