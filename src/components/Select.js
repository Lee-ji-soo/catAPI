class Select {
    constructor({ $app, $target, selectios, title }) {
        this.$app = $app;
        this.$target = $target;
        this.list = selectios;
        this.selectTitle = title

        this.state = {
            show: false
        }

        //create Element
        this.$target.className = 'select_wrap'
        this.$selectForm = document.createElement('div');
        this.$selectForm.className = `select${this.selectTitle}_form select_form`;
        this.$selectForm.innerText = `Select${this.selectTitle} ➕`
        this.$select = document.createElement("ul");
        this.$select.className = `select${this.selectTitle} select`;

        this.$target.appendChild(this.$selectForm);
        this.$selectForm.appendChild(this.$select);

        this.init();
        this.render();

        //Event listener
        this.$app.addEventListener('click', (e) => { this.handleEvt(e) });
    }

    handleEvt(e) {
        if (e.target === this.$selectForm) {
            this.state.show = !this.state.show;
            this.$select.style.display = this.state.show ? "block" : 'none'
        } else if (this.state.show && !e.target.classList.contains('selectList')) {
            this.$select.style.display = 'none'
        }
    }

    init() {
        this.$select.style.display = 'none'
    }

    render() {
        const htmlStr = this.list.map(item =>
            `<li><p class='selectList'>${item}</p></li>`
        ).join('');

        this.$select.innerHTML = htmlStr;
    }
}
export default Select;
