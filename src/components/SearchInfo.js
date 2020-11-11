class SearchInfo {
    constructor({ $target, data }) {
        this.$target = $target;
        this.data = data;

        this.$searchInfo = document.createElement("div");
        this.$searchInfo.className = "searchInfo";
        this.$target.appendChild(this.$searchInfo);
        this.render();
    };

    setState(nextData) {
        this.data = nextData;
        this.render();
    };

    render() {
        if (this.data.infoIsVisible && this.data.onBreed) {
            const { clicked: { url, breeds: { 0: { weight: { metric = 0 }, description = '', origin = '', name = '', temperament = '' } } } } = this.data;
            const htmlStr = `
                            <div class="content-wrapper">
                                <div class='img' style='background-image:url(${url})'></div>        
                                <section class="description">
                                    <p class='name'>${name}</p>
                                    <p>
                                        <span class='tt'>Description</span>
                                        <span class='con'>${description}<span>
                                    </p>
                                    <p>
                                        <span class='tt'>Temperament</span>
                                        <span class='con'>${temperament}<span>
                                    </p>
                                    <p>
                                        <span class='tt'>Origin</span>
                                        <span class='con'>${origin}<span>
                                    </p>
                                    <p>
                                        <span class='tt'>Weight</span>
                                        <span class='con'>${metric}<span>
                                    </p>
                                </section>
                                <button class="close">x</button>
                            </div>`;

            this.$searchInfo.innerHTML = htmlStr;
            this.$searchInfo.style.display = "block";
            this.$close = this.$searchInfo.querySelector(".close");
            this.$searchInfo.addEventListener("click", this.handleClick.bind(this));
            this.$close.addEventListener("click", this.handleClick.bind(this));
            window.addEventListener('keydown', this.handleKey.bind(this));

        } else {
            this.$searchInfo.style.display = "none";

        }
    }

    closeModal() {
        this.data.visible = false;
        this.$searchInfo.style.display = "none";
    }

    handleClick(e) {
        if (e.target === this.$close || e.target === this.$searchInfo) {
            this.closeModal();
            return;
        }
    }

    handleKey(e) {
        if (e.key === 'Escape') {
            this.closeModal();
            return;
        }
    }
};

export default SearchInfo;
