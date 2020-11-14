import FaqWidget from '../ui/widgets/FaqWidget';

describe('Test class BaseWidget: ', () => {
  const container = document.createElement('div');
  const elWidget1 = document.createElement('div');
  const elWidget2 = document.createElement('div');
  const elWidget3 = document.createElement('div');
  const containerElement = document.createElement('div');
  container.classList.add('widget-container');
  elWidget1.classList.add('widget', 'faq', 'active');
  elWidget2.classList.add('widget', 'active');
  elWidget3.classList.add('widget');
  containerElement.classList.add('container');
  container.appendChild(elWidget1);
  container.appendChild(elWidget2);
  container.appendChild(elWidget3);
  elWidget1.appendChild(containerElement);
  const api = {
    test: 'test',
  };
  // eslint-disable-next-line no-unused-vars
  const widget1 = new FaqWidget(elWidget1, '', api);
  function formNotCreated() {
    try {
      return new FaqWidget();
    } catch (e) {
      throw new Error(e);
    }
  }
  test('should not create an object if the element was not passed', () => {
    expect(formNotCreated).toThrow();
  });
  function formNotCreated2() {
    try {
      return new FaqWidget(elWidget1, '');
    } catch (e) {
      throw new Error(e);
    }
  }

  test('should not create an object if the api was not passed', () => {
    expect(formNotCreated2).toThrow();
  });
});
