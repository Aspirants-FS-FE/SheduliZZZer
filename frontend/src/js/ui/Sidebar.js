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
        this.selectItem(event.target);
        const widgetClass = event.target.classList[1];
        const widgetName = event.target.textContent;
        this.widgets[widgetClass].activateWidget();
        this.otherElements.header.updateTitle(widgetName);
      });
    });
  }

  selectItem(target) {
    if (this.selected) {
      this.selected.classList.remove('selected');
    }
    this.selected = target.closest('.menu-list-item');
    this.selected.classList.add('selected');
  }

  minimize() {
    this.element.classList.toggle('sidebar-toggle');
  }

  bindOtherElement(name, otherElement) {
    this.otherElements[name] = otherElement;
  }
}
