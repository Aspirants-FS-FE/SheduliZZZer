export default class BaseForm {
  constructor(template) {
    if (!template) {
      throw new Error('Element not found');
    } else {
      this.element = document.createElement('form');
      this.element.classList.add('page-form');
      this.element.innerHTML = template;
      this.close = '';
    }
  }

  registerEvents() {
    this.closeEl = this.element.querySelector('.close');
    this.element.onsubmit = (event) => {
      event.preventDefault();
      this.submit();
    };
    this.closeEl.addEventListener('click', () => {
      this.close();
    });
  }

  getData() {
    return new FormData(this.element.form);
  }

  onSubmit(options) {
    return options;
  }

  submit() {
    this.onSubmit();
  }
}
