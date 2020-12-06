class MyCounter extends HTMLElement {
    static formAssociated = true;

    static get observedAttributes() {
        return ["step"];
    }

    constructor() {
        super();
        this.internals_ = this.attachInternals();
        this.innerHTML = `
        <button type="button" id="decreaseBtn">-</button>
        <input type="number">
        <button type="button" id="increaseBtn">+</button>
    `;

        this.querySelector('input').addEventListener('input', () => this.validate());
        this.setAttribute('tabindex', 0);
        this.validate();
        // Do something if <label> is clicked.
        this.addEventListener('click', () => { this.querySelector('input').focus() });


        // add event listeners on both buttons
        this.querySelector('#increaseBtn').addEventListener('click', this.increase.bind(this));
        this.querySelector('#decreaseBtn').addEventListener('click', this.decrease.bind(this));
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "step") {
            this.step = newValue;
        }
    }

    // Called whenever the value is updated.
    validate() {
        if (!this.matches(':disabled') && this.hasAttribute('required') &&
            this.value < 0)
            this.internals_.setValidity({ customError: true }, 'Cannot be negative',);
        else
            this.internals_.setValidity({});
        this.internals_.setFormValue(this.value);
    }

    // Lifecycle callbacks for form-associated custom elements. 

    // Lifecycle callback. This is called when association with
    // <form> is changed.
    formAssociatedCallback() {
        console.log('Form associated');
    }

    // Lifecycle callback. This is called when the 'disabled' attribute of
    // this element is updated.
    formDisabledCallback(disabled) {
        if (disabled) {
            console.log('is disabled');
            this.querySelector('input').disabled = true;
        }
    }

    // Lifecycle callback. This is called when the form is reset.
    formResetCallback() {
        console.log('Form reset');
        this.value = this.getAttribute('value') || '';
        this.validate();
    }

    // Common form control properties and methods. We have access to
    // these because we have set this.internals_

    get form() { return this.internals_.form; }

    get name() { return this.getAttribute('name') };

    get type() { return this.localName; }

    // Form controls usually expose a "value"  property
    get value() { return this.querySelector('input').value; }
    set value(val) { this.querySelector('input').value = val; }

    get step() {
        return this.getAttribute('step');
    }

    set step(val) {
        this._step = val;
    }

    increase() {
        this.value = Number(this.value) + Number(this._step);
        this.validate();
    }

    decrease() {
        this.value = Number(this.value) - Number(this._step);
        this.validate();
    }
}

customElements.define('my-counter', MyCounter);