const template = document.createElement('template')
template.innerHTML = `<div class="light-bulb"></div><button class="switch">Turn on/off</button>`

class LightSwitch extends HTMLElement {
  _switchState = false;

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true))

    this.querySelector('.switch').addEventListener('click', () => {
      this._switchState = !this._switchState;
      this.switchLight(this._switchState);
    });
  }

  switchLight(state) {
    const lightBulb = this.querySelector('.light-bulb');

    if (state) {
      lightBulb.classList.add('light-bulb--on');
    }
    else {
      lightBulb.classList.remove('light-bulb--on');
    }
  }
}

customElements.define('light-switch', LightSwitch);