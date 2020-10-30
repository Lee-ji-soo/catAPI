class Loading {
    constructor({ $target, loading }) {
        this.$target = $target;
        this.isLoading = loading;
        this.$loading = document.createElement('section');
        this.$loading.classList.add('loading');
        if (this.$target) {
            this.$target.appendChild(this.$loading);
        }
        this.render();
    }

    render() {
        this.$loading.innerHTML = `<img src='https://raw.githubusercontent.com/Lee-ji-soo/catAPI/main/src/assets/loading.gif'/>`
        this.$loading.style.display = `${this.$isLoading ? 'block' : 'none'}`
    }

    setState(nextState) {
        this.$isLoading = nextState
        this.render();
    }
}

export default Loading;
