export default class BaseWidget {
  constructor(element, Card, api) {
    if (!element) {
      throw new Error('Element not found');
    } else {
      this.element = element;
    }
    if (Card) {
      this.card = new Card(this);
    }
    this.container = this.element.querySelector('.container');
    this.api = api;
  }

  deactivateAllWidgets() {
    const allWidgets = this.element.parentNode.querySelectorAll('.widget');
    [...allWidgets].forEach((widget) => widget.classList.remove('active'));
  }

  activateWidget() {
    this.deactivateAllWidgets();
    this.element.classList.add('active');
    this.container.innerHTML = '';
    this.loadContent();
  }

  loadContent() {}
}
