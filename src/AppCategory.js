import { Select, SearchResult, SearchInfo, Header, DarkMode, Loading } from './components';
import { api } from './utils/api.js';

class AppCategory {
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
            path: 2,
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

        this.isLoading.setState(false);

        this.searchResult.setState({
            ...this.data,
            items: nextData.items ? nextData.items : [],
            page: this.data.page
        });
    };

    mountSelectCategory() {
        this.selectCategory = new Select({
            $app: this.$target,
            $target: this.$selectWrap,
            selections: this.categories,
            title: 'Category',
            onSelectCategory: (selected) => { this.onSelectCategory(selected) },
        })
    };

    mountComponent() {
        this.header = new Header({
            $target: this.$header
        })

        this.isLoading = new Loading({
            $target: this.$target,
            loading: this.state.loading
        })

        this.darkMode = new DarkMode({
            $target: this.$header,
        })

        this.searchResult = new SearchResult({
            $target: this.$main,
            data: this.data.items,
            onBottom: () => { this.onBottom(this.fetchMoreCat) },
            onClickImg: (data) => { this.onClickImg(data) }
        });
    }

    init() {
        this.fetchInitialCategories();
        this.mountComponent();
        this.setPath();
        this.render();
    };

    setPath() {
        this.header.setState(this.state.path);
    }

    render() {
        this.searchResult.setState({ page: 1, items: [] });
    }

    onBottom() {
        this.isLoading.setState(true);
        this.data.page = this.data.page + 1;
        this.fetchMoreCat(this.data)
    }

    onSelectCategory(selected) {
        this.isLoading.setState(true);
        this.data.category = selected;
        this.fetchCategory({ category: this.data.category })
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
        this.isLoading.setState(false);
    }

    async fetchInitialCategories() {
        const categories = await api.fetchInitialCategories();
        this.categories = categories;
        this.data.category = categories[0];
        this.mountSelectCategory();
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
export default AppCategory;

