class DarkMode {
    constructor({ $target }) {
        this.$target = $target;
        this.$toggleBtn = document.createElement('button')
        this.$target.appendChild(this.$toggleBtn)

        this.mode = this.getMode()

        this.$toggleBtn.addEventListener('click', () => this.handelToggle());
        this.$toggleBtn.className = 'darkMode';
        window.addEventListener('load', () => this.getMode())

        this.render()
    }

    render() {
        this.$toggleBtn.innerText = `${this.getMode() === 'dark' ? 'Light Mode' : 'Dark Mode'}`
        document.documentElement.setAttribute('color-mode',
            this.mode === 'light' ? 'light' : 'dark')
    }

    setState(nextMode) {
        this.mode = nextMode
        localStorage.setItem('color-mode', this.mode)
        this.render()
    }

    getMode() {
        const savedMode = localStorage.getItem('color-mode')
        const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches

        if (preferDark) {
            return 'dark'
        } else if (savedMode) {
            return savedMode
        } else {
            return 'light'
        }
    }

    handelToggle() {
        this.mode = this.mode === 'light' ? 'dark' : 'light'
        this.setState(this.mode)
    }
};

export default DarkMode;
