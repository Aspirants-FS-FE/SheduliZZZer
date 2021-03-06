import BaseWidget from '../ui/widgets/BaseWidget';

describe('Test class BaseWidget:', () => {
  const container = document.createElement('div');
  const elWidget1 = document.createElement('div');
  const elWidget2 = document.createElement('div');
  const elWidget3 = document.createElement('div');
  const containerElement = document.createElement('div');
  container.classList.add('widget-container');
  elWidget1.classList.add('widget', 'profession', 'active');
  elWidget2.classList.add('widget', 'active');
  elWidget3.classList.add('widget');
  containerElement.classList.add('container');
  container.appendChild(elWidget1);
  container.appendChild(elWidget2);
  container.appendChild(elWidget3);
  elWidget1.appendChild(containerElement);
  const api = { test: 'test' };
  const widget1 = new BaseWidget(elWidget1, '', api);
  test('should find an element with a selector ".container"', () => {
    expect(widget1.container.classList.contains('container')).toBeTruthy();
  });
  function formNotCreated() {
    try {
      return new BaseWidget();
    } catch (e) {
      throw new Error(e);
    }
  }

  test('should not create an object if the element was not passed', () => {
    expect(formNotCreated).toThrow();
  });
  function formNotCreated2() {
    try {
      return new BaseWidget(elWidget1, '');
    } catch (e) {
      throw new Error(e);
    }
  }

  test('should not create an object if the api was not passed', () => {
    expect(formNotCreated2).toThrow();
  });
  test('when passing a Сlass, an object must be created', () => {
    class Test {
      test() {}
    }
    const widget2 = new BaseWidget(elWidget1, Test, api);
    // eslint-disable-next-line no-prototype-builtins
    expect(widget2.hasOwnProperty('card')).toBeTruthy();
  });
  test('api must be an object', () => {
    expect(
      Object.prototype.toString.call(widget1.api) === '[object Object]',
    ).toBeTruthy();
  });
  test('the method should remove the class "active"', () => {
    widget1.deactivateAllWidgets();
    const deletedItems = document.querySelectorAll('.active');
    expect(deletedItems.length).toBe(0);
  });
  test('should set the active class to the selected element', () => {
    widget1.activateWidget();
    expect(widget1.element.classList.contains('active')).toBeTruthy();
  });
  test('must return null if the element contains an active class', () => {
    widget1.element.classList.add('active');
    expect(widget1.activateWidget()).toBeNull();
  });
  test('should add class progress', () => {
    widget1.startProgress();
    expect(widget1.container.classList.contains('progress')).toBeTruthy();
  });
  test('should remove class progress', () => {
    widget1.endProgress();
    expect(widget1.container.classList.contains('progress')).not.toBeTruthy();
  });
});
