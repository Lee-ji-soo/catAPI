class Select {
    constructor({ $app, $target, selections, title, onSelect }) {
        this.$app = $app;
        this.$target = $target;
        this.selectTitle = title;
        this.onSelect = onSelect
        this.state = {
            list: selections,
            show: false,
            selected: { id: 0, title: "None" }
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

    onClickSelect(e) {
        this.$selectList.forEach(list => e.target === list ?
            this.state.selected.title = list.innerText : this.state.selected)
        this.onHiddenSelect();
        this.setState({ ...this.state });
    }

    handleEvt(e) {
        if (e.target === this.$selectForm) {
            this.onShowSelect();
            return;
        } else if (this.state.show && !e.target.classList.contains('selectList')) {
            this.onHiddenSelect();
            return;
        } else if (e.target.classList.contains('selectList')) {
            this.onClickSelect(e);
        }
    }

    init() {
        this.onHiddenSelect();
    }

    render() {
        const htmlStr = this.state.list.map(item =>
            `<li><p class='selectList'>${item.title}</p></li>`
        ).join('');

        this.$select.innerHTML = htmlStr;
        this.$selectList = this.$select.querySelectorAll('.selectList');

        this.$selected.innerText = this.state.selected.title;
    }

    setState(nextData) {
        this.state = nextData;
        this.state.list.map(item => {
            if (this.state.selected.title === item.title) {
                this.state.selected = item
            }
        })

        this.onSelect(this.state.selected);
        this.render();
    }
}
export default Select;
