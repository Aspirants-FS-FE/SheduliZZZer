import Modal from '../ui/Modal';
import EventForm from '../ui/forms/EventForm';
import formTemplate from '../ui/forms/formTemplate';
import ExpertForm from '../ui/forms/ExpertForm';
import GroupForm from '../ui/forms/GroupForm';
import LoginForm from '../ui/forms/LoginForm';
import ProfessionForm from '../ui/forms/ProfessionForm';
import RegisterForm from '../ui/forms/RegisterForm';

describe('Test class Modal', () => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    '<div class="modal">Test</div>',
  );
  const modalEl = document.querySelector('.modal');
  const modal = new Modal(modalEl);
  test('should not be created without passing a parameter to the constructor', () => {
    function formNotCreated() {
      try {
        return new Modal();
      } catch (e) {
        throw new Error(e);
      }
    }

    expect(formNotCreated).toThrow();
  });
  test('should be create object', () => {
    expect(modal).toBeDefined();
  });
  test('method check initForms', () => {
    modal.initForms();
    const testObject = {
      event: new EventForm(formTemplate.event),
      expert: new ExpertForm(formTemplate.expert),
      group: new GroupForm(formTemplate.group),
      login: new LoginForm(formTemplate.login),
      profession: new ProfessionForm(formTemplate.profession),
      register: new RegisterForm(formTemplate.register),
    };
    expect(modal.forms).toEqual(testObject);
  });
  test('the "close" method should empty the container', () => {
    modal.close();
    expect(modal.element.innerHTML === '').toBeTruthy();
  });
  test('the "close" method should remove class "modal-active"', () => {
    modal.element.classList.add('modal-active');
    modal.close();
    expect(modal.element.classList.contains('modal-active')).not.toBeTruthy();
  });
  test('the "showForm" method should add class "modal-active"', () => {
    modal.showForm('event');
    expect(modal.element.classList.contains('modal-active')).toBeTruthy();
  });
});
