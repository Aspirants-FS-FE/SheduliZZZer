export default class Sidebar {
  constructor(element, widgets) {
    if (!element) {
      throw new Error('Element not found');
    } else {
      this.element = element;
    }
    this.widgets = widgets;
    this.action = '';
    this.init();
  }

  init() {
    const links = this.element.querySelectorAll('.menu-link');
    [...links].forEach((link) => {
      link.addEventListener('click', (event) => {
        const widgetClass = event.target.classList[1];
        const widgetName = event.target.textContent;
        this.widgets[widgetClass].activateWidget();
        this.action(widgetName);
      });
    });
  }

  addAction(action) {
    this.action = action;
  }
}
