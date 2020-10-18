import Form from '../ui/forms/Form';

const element = 'element';
const form = new Form(element);

test('create form', () => {
  expect(form.element).toBe(element);
});
