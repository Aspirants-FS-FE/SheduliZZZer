/* eslint class-methods-use-this: ["error", { "exceptMethods": ["init", "close", "sent"] }] */
export default class Form {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {}

  close() {}

  sent() {}
}
