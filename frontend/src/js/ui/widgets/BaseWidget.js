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
    if (api) {
      this.api = api;
    } else {
      throw new Error('Api not found');
    }
    this.container = this.element.querySelector('.container');
  }

  deactivateAllWidgets() {
    const allWidgets = this.element.parentNode.querySelectorAll('.widget');
    [...allWidgets].forEach((widget) => widget.classList.remove('active'));
  }

  activateWidget() {
    if (this.element.classList.contains('active')) return null;
    this.deactivateAllWidgets();
    this.element.classList.add('active');
    this.container.innerHTML = '';
    this.loadContent();
  }

  startProgress() {
    this.container.classList.add('progress');
  }

  endProgress() {
    this.container.classList.remove('progress');
  }

  loadContent() {}
}
