export default class BaseWidget {
  constructor(element, card, api) {
    if (!element) {
      throw new Error('Element not found');
    } else {
      this.element = element;
    }
    if (card) {
      this.card = new card(this.element);
    }
    this.api = api;
  }

  deactivateAllWidgets() {
    const allWidgets = this.element.parentNode.querySelectorAll('.widget');
    [...allWidgets].forEach((widget) => widget.classList.remove('active'));
  }

  activateWidget() {
    this.deactivateAllWidgets();
    this.element.classList.add('active');
    this.loadContent();
  }

  loadContent() {}
}
