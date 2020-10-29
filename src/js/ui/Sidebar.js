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
    this.initToggleButton();
    [...links].forEach((link) => {
      link.addEventListener('click', (event) => {
        const widgetClass = event.target.classList[1];
        const widgetName = event.target.textContent;
        this.widgets[widgetClass].activateWidget();
        this.action(widgetName);
      });
    });
  }

  initToggleButton() {
    const btn = document.querySelector('.header-humb');
    btn.addEventListener('click', () => {
      this.element.classList.toggle('sidebar-toggle');
      Sidebar.initToggleHumb();
    });
  }

  initToggleHumb() {
    const btn = document.querySelector('.header-humb');
    const btnHumb = btn.lastElementChild;
    btnHumb.classList.toggle('header-humb-line');
    btnHumb.classList.toggle('header-humb-close');
  }

  addAction(action) {
    this.action = action;
  }
}
