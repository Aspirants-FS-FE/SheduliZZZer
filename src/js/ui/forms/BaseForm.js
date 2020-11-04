export default class BaseForm {
  constructor(template) {
    this.element = document.createElement('form');
    this.element.classList.add('page-form');
    this.element.innerHTML = template;
    this.close = '';
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
