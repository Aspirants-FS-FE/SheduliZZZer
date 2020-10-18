export default class BaseWidget {
  constructor(element) {
    if (!element) {
      throw new Error('Element not found');
    } else {
      this.element = element;
    }
  }

  deactivateAllWidgets() {
    const allWidgets = this.element.parentNode.querySelectorAll('.widget');
    [...allWidgets].forEach(widget => widget.classList.remove('active'));
  }

  activateWidget() {
    this.deactivateAllWidgets();
    this.element.classList.add('active');
  }
}
