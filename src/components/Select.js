class Select {
    constructor({ $app, $target, selectios, title }) {
        this.$app = $app;
        this.$target = $target;
        this.list = selectios;
        this.selectTitle = title;

        this.state = {
            show: false,
            selected: 'None'
        }

        //create Element
        this.$target.className = 'select_wrap'
        this.$selectForm = document.createElement('div');
        this.$selectForm.className = `select${this.selectTitle}_form select_form`;
        this.$selectForm.innerText = `${this.selectTitle}+`

        this.$select = document.createElement("ul");
        this.$select.className = `select${this.selectTitle} select`;

        this.$selected = document.createElement('p');
        this.$selected.className = 'selected';

        this.$target.appendChild(this.$selectForm);
        this.$selectForm.append(this.$select, this.$selected);
        this.$selectList;

        this.init();
        this.render();

        //Event listener
        this.$app.addEventListener('click', (e) => { this.handleEvt(e) });
    }

    onShowSelect() {
        this.state.show = !this.state.show;
        this.$select.style.display = this.state.show ? "block" : 'none'
    }

    onHiddenSelect() {
        this.$select.style.display = 'none'
    }

    onSelect(e) {
        this.$selectList.forEach(list => e.target === list ?
            this.state.selected = list.innerText : this.state.selected)
        this.onHiddenSelect();
        this.render();
    }

    handleEvt(e) {
        if (e.target === this.$selectForm) {
            this.onShowSelect();
            return;
        } else if (this.state.show && !e.target.classList.contains('selectList')) {
            this.onHiddenSelect();
            return;
        } else if (e.target.classList.contains('selectList')) {
            this.onSelect(e);
        }
    }

    init() {
        this.onHiddenSelect();
    }

    render() {
        const htmlStr = this.list.map(item =>
            `<li><p class='selectList'>${item}</p></li>`
        ).join('');

        this.$select.innerHTML = htmlStr;
        this.$selectList = this.$select.querySelectorAll('.selectList');

        //selected
        this.$selected.innerText = this.state.selected;
    }

    setState(nextData) {
        this.render();
    }
}
export default Select;
