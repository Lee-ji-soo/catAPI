class Select {
    constructor({ $app, $target, selections, title, onSelectCategory, onSelectBreed }) {
        this.$app = $app;
        this.$target = $target;
        this.selectTitle = title;
        this.selections = selections;
        this.onSelectCategory = onSelectCategory;
        this.onSelectBreed = onSelectBreed;

        this.state = {
            id: 0,
            list: this.selections,
            show: false,
            selected: this.selections[0]
        }

        //create Element
        this.$target.className = 'select_wrap'
        this.$selectForm = document.createElement('div');
        this.$selectForm.className = `select${this.selectTitle}_form select_form`;

        this.$select = document.createElement("ul");
        this.$select.className = `select${this.selectTitle} select`;

        if (this.$target && this.$selectForm) {
            this.$target.appendChild(this.$selectForm);
            this.$selectForm.append(this.$select);
        }
        this.$selectList;
        this.render();

        //Event listener
        if (this.$app) {
            this.$app.addEventListener('click', (e) => { this.handleEvt(e) });
        }
    }

    onClickSelect(e) {
        this.$selectList.forEach(list => {
            if (e.target === list) {
                this.state.id = e.target.parentNode.dataset.select;
                this.addItem({ e, name: list.innerText });
                return;
            }
        })
        this.handleActive();
    }

    handleEvt(e) {
        if (e.target.classList.contains('selectList')) {
            this.onClickSelect(e);
        }
    }

    render() {
        const htmlStr = this.state.list.map(item =>
            `<li data-select=${item.id}><p class='selectList ${this.selectTitle}'>${item.name}</p></li>`
        ).join('');

        this.$select.innerHTML = htmlStr;
        this.$selectList = this.$select.querySelectorAll('.selectList');
    }

    handleActive() {
        this.$selectList.forEach(p => {
            if (p.parentNode.dataset.select === this.state.id) {
                p.parentNode.classList.add('active');
            } else {
                p.parentNode.classList.remove('active');
            }
        });
    }

    addItem({ e, name }) {
        this.state.list.map(item => {
            if (name === item.name) {
                this.state.selected = item
            }
        })
        this.seperateEvt(e);
    }

    seperateEvt(e) {
        if (e.target.classList.contains('Breed') && this.onSelectBreed) {
            this.onSelectBreed(this.state.id);
        } else if (e.target.classList.contains('Category') && this.onSelectCategory) {
            this.onSelectCategory(this.state.id);
            return;
        }
    }
}
export default Select;
