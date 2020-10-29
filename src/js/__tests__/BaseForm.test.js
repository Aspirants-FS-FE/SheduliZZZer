import BaseForm from '../ui/forms/BaseForm';

const element = 'element';
const form = new BaseForm(element);

test('create form', () => {
  expect(form.element).toBe(element);
});
