const template = document.createElement('template')
template.innerHTML = `
    <h1>To do</h1>
    <ul id="todos"></ul>
`;

class TodoList extends HTMLElement {
    _todos = [];

    get todos() {
        return this._todos;
    }

    set todos(value) {
        this._todos = value;

        this.renderList(this._todos);
    }

    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(template.content.cloneNode(true));
    }

    renderList() {
        this.querySelector('#todos').innerHTML = this.todos.map(todo => `<li>${todo.text}</li>`).join('');
    }
}

window.customElements.define('to-do-list', TodoList);