/* eslint class-methods-use-this: ["error", { "exceptMethods": ["init", "close", "sent"] }] */
export default class BaseForm {
  constructor(element) {
    this.element = element;
    this.registerEvents();
  }

  registerEvents() {
    this.element.onsubmit = (event) => {
      event.preventDefault();
      this.submit();
    }
  }

  getData() {
    return new FormData( this.element );
  }

  onSubmit(options) {}

  submit() {
    this.onSubmit( this.getData() )
  }
}
