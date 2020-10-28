class RollingText {
    constructor({ $target }) {
        this.$target = $target;
        this.$p = document.createElement('p');
        this.$target.appendChild(this.$p);

        this.text = 'TRY CATCH YOUR CAT LOVELY ADORABLE CUTE CAT! WATCH OUT LOVELY CAT!';
        this.$first;
        this.render();

        this.x = 0;
        this.vx = .1;

        window.requestAnimationFrame(this.rolling.bind(this))
    };

    render() {
        this.$p.innerText = this.text;
    };

    rolling() {

        this.x -= this.vx;
        this.$target.style.transform = `translateX(${this.x}%)`;
        if (this.x < -200) {
            this.x = 0;
        }
        requestAnimationFrame(this.rolling.bind(this));
    };
};

export default RollingText;
