import LoginForm from '../ui/forms/LoginForm';

describe('Test class ExpertForm:', () => {
  const element = 'element';
  const form = new LoginForm(element);
  const expected = `<form class="page-form">${element}</form>`;
  test('should be create object', () => {
    expect(form).toBeDefined();
  });
  test('should create the form correctly', () => {
    expect(form.element.outerHTML).toBe(expected);
  });

  // eslint-disable-next-line func-names
  const formNotCreated = function () {
    try {
      return new LoginForm();
    } catch (e) {
      throw new Error(e);
    }
  };

  test('should not be created without passing a parameter to the constructor', () => {
    expect(formNotCreated).toThrow();
  });
});
