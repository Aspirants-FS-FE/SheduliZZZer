export default class Sidebar {
  constructor(element, widgets) {
    if (!element) {
      throw new Error('Element not found');
    } else {
      this.element = element;
    }
    this.widgets = widgets;
    this.init();
  }

  init() {
    const links = this.element.querySelectorAll('.menu-link');
    [...links].forEach((link) => {
      link.addEventListener('click', (event) => {
        this.widgets[event.target.classList[1]].activateWidget();
      });
    });
  }
}
