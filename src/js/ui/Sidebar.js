export default class Sidebar {
  constructor(element, widgets) {
    if (!element) {
      throw new Error('Element not found');
    } else {
      this.element = element;
    }
    this.otherElements = {};
    this.widgets = widgets;
    this.init();
  }

  init() {
    const links = this.element.querySelectorAll('.menu-link');
    [...links].forEach((link) => {
      link.addEventListener('click', (event) => {
        const widgetClass = event.target.classList[1];
        const widgetName = event.target.textContent;
        this.widgets[widgetClass].activateWidget();
        this.otherElements.header.updateTitle(widgetName);
      });
    });
  }

  minimize() {
    this.element.classList.toggle('sidebar-toggle');
  }

  bindOtherElement(name, otherElement) {
    this.otherElements[name] = otherElement;
  }
}
