class Cat {
    constructor({ $target, width, left, top }) {
        this.state = {
            isClicked: false
        }

        this.width = width;
        this.left = left;
        this.dir;
        this.top = top;
        this.vx = 1;
        this.vy = 1;
        this.rotate = 0;
        this.vr = 1;
        this.stageWidth;
        this.stageHeight;

        //create Element
        this.$target = $target;
        this.$cat = document.createElement('img');
        this.$cat.className = 'cat';
        this.$cat.setAttribute('src', '../src/assets/cat.png');
        this.$target.appendChild(this.$cat);

        this.$cat.style.width = `${this.width}px`;
        this.$cat.style.left = `${this.left}px`;
        this.$cat.style.top = `${this.top}px`;

        this.$cat.addEventListener('click', () => { this.handleClick(this.state) });
        window.requestAnimationFrame(this.animate.bind(this));
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;
    }

    animate() {
        this.top += this.vy;
        this.left += this.vx;
        this.rotate += this.vr;
        if (this.left < 0 - this.width / 2) {
            this.vx *= -1;
        } if (this.left > this.stageWidth - this.width / 2) {
            this.vx *= -1;
        } if (this.top < 0 - this.width / 2) {
            this.vy *= -1;
        } if (this.top > this.stageHeight - this.width / 2) {
            this.vy *= -1;
        } if (this.rotate > 45) {
            this.vr *= -1;
        } if (this.rotate < -45) {
            this.vr *= -1;
        }

        this.$cat.style.top = `${this.top}px`;
        this.$cat.style.left = `${this.left}px`;
        this.$cat.style.transform = `rotate(${this.rotate}deg)`;
        requestAnimationFrame(this.animate.bind(this));
    }

    disappear() {
        if (this.state.isClicked) {
            this.$cat.classList.add('disappear');
        }
    }

    handleClick(state) {
        this.state = state;
        this.state.isClicked = !this.state.isClicked;
        this.disappear();
    }
}

export default Cat;
