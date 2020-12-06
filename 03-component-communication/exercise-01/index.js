const template = document.createElement('template')
template.innerHTML = `<div class="light-bulb"></div><button class="switch">Turn on/off</button>`

class LightSwitch extends HTMLElement {
  static get observedAttributes() {
    return ['on'];
  }

  get isOn() {
    return this.hasAttribute('on');
  }

  set isOn(value) {
    if (this.isOn == value) {
      return;
    }

    if (value) {
      this.setAttribute('on', '');
    } else {
      this.removeAttribute('on');
    }
  }

  connectedCallback() {
    this.appendChild(template.content.cloneNode(true))

    this.querySelector('.switch').addEventListener('click', () => {
      this.isOn = !this.isOn;

      this.switchLight(this.isOn);
    });

    this.switchLight(this.isOn);
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    this.isOn = oldValue === null;
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