class Loading {
    constructor({ $target, loading }) {
        this.$target = $target;
        this.isLoading = loading;
        this.$loading = document.createElement('section');
        this.$loading.classList.add('loading');
        this.$target.appendChild(this.$loading);

        this.render();
    }

    render() {
        this.$loading.innerHTML = `<p>now is loading...</p>`
        this.$loading.style.display = `${this.$isLoading ? 'block' : 'none'}`
    }

    setState(nextState) {
        this.$isLoading = nextState
        this.render();
    }
}

export default Loading;
