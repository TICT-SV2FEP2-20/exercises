import {LitElement, html} from 'lit-element';

class AppToDo extends LitElement {
  render() {
    return html`
      <div>Hello from AppToDo!</div>
    `;
  }
}

customElements.define('app-to-do', AppToDo);