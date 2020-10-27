import { Header, DarkMode, Random } from './components';
import { api } from './utils/api.js';

class AppSave {
    constructor({ $target }) {
        this.$target = $target;
        this.$header = document.createElement('header');
        this.$main = document.createElement('main');
        this.$target.append(this.$header, this.$main);
        this.init();
    }

    mountComponent() {
        this.header = new Header({
            $target: this.$header
        })

        this.darkMode = new DarkMode({
            $target: this.$header
        })
    }

    init() {
        this.mountComponent();
    }
};

export default AppSave;
