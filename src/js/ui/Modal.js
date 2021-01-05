import EventForm from './forms/EventForm';
import ExpertForm from './forms/ExpertForm';
import GroupForm from './forms/GroupForm';
import LoginForm from './forms/LoginForm';
import ProfessionForm from './forms/ProfessionForm';
import RegisterForm from './forms/RegisterForm';
import formTemplate from './forms/formTemplate';

export default class Modal {
  constructor(element) {
    if (!element) throw new Error('Element not found');
    this.element = element;
    this.initForms();
  }

  initForms() {
    this.forms = {
      event: new EventForm(formTemplate.event),
      expert: new ExpertForm(formTemplate.expert),
      group: new GroupForm(formTemplate.group),
      login: new LoginForm(formTemplate.login),
      profession: new ProfessionForm(formTemplate.profession),
      register: new RegisterForm(formTemplate.register),
    };
  }

  showForm(formName) {
    const form = this.forms[formName];
    form.close = this.close.bind(this);
    form.registerEvents();
    this.element.appendChild(form.element);
    this.element.classList.add('modal-active');
  }

  close() {
    this.element.innerHTML = '';
    this.element.classList.remove('modal-active');
  }
}
