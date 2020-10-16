import SearchInput from './components/SearchInput.js';
import SearchResult from './components/SearchResult.js';

class App {
    constructor({ $target }) {
        this.$target = $target;
        this.$header = document.createElement('header');
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

        this.searchInput = new SearchInput({
            $target: this.$header,
        });

        this.searchResult = new SearchResult({
            $target: this.$main,
            data: this.data,
        });

    }

    setState(nextData) {

    }

}
export default App;

