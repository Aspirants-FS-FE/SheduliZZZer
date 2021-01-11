export default class Header {
  constructor(element) {
    if (!element) {
      throw new Error('Element not found');
    } else {
      this.otherElements = {};
      this.element = element;
      this.init();
      this.registerEvents();
    }
  }

  init() {
    this.titleEl = this.element.querySelector('.header-title');
    this.loginEl = this.element.querySelector('.login');
    this.registerEl = this.element.querySelector('.register');
    this.humbEl = document.querySelector('.header-humb');
    this.btnHumb = this.humbEl.lastElementChild;
  }

  registerEvents() {
    this.humbEl.addEventListener('click', () => {
      this.otherElements.sidebar.minimize();
      this.btnHumb.classList.toggle('header-humb-line');
      this.btnHumb.classList.toggle('header-humb-close');
    });
    this.loginEl.addEventListener('click', () => {
      this.otherElements.modal.showForm('login');
    });
    this.registerEl.addEventListener('click', () => {
      this.otherElements.modal.showForm('register');
    });
  }

  updateTitle(title) {
    this.titleEl.innerText = title;
  }

  bindOtherElement(name, otherElement) {
    this.otherElements[name] = otherElement;
  }
}
