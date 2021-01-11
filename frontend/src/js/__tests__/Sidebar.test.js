import Sidebar from '../ui/Sidebar';

describe('Test class Sidebar', () => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    `<aside class="sidebar sidebar-toggle">
        <header class="sidebar-header">
          <a class="sidebar-logo" href="#">
            <img src="#" alt="Логотип" />
          </a>
          <button class="button-sidebar"></button>
        </header>
        <nav class="menu">
          <ul class="menu-list">
            <li class="menu-list-item">
              <a class="menu-link main" href="#">Главная</a>
            </li>
            <li class="menu-list-item">
              <a class="menu-link profession" href="#">Профессии</a>
            </li>
            <li class="menu-list-item">
              <a class="menu-link courses" href="#">Курсы</a>
            </li>
            <li class="menu-list-item">
              <a class="menu-link groups" href="#">Группы</a>
            </li>
            <li class="menu-list-item">
              <a class="menu-link experts" href="#">Преподаватели</a>
            </li>
            <li class="menu-list-item">
              <a class="menu-link faq" href="#">FAQ</a>
            </li>
          </ul>
        </nav>
      </aside>`,
  );
  const sidebarEl = document.querySelector('.sidebar');
  const widgets = {
    main: {
      test: 'test',
      activateWidget() {
        console.log('test');
      },
    },
  };
  const sidebar = new Sidebar(sidebarEl, widgets);
  sidebar.otherElements.header = function updateTitle() {
    console.log('test');
  };
  test('should not be created without passing a parameter to the constructor', () => {
    function formNotCreated() {
      try {
        return new Sidebar();
      } catch (e) {
        throw new Error(e);
      }
    }
    expect(formNotCreated).toThrow();
  });
  test('should be create object', () => {
    expect(sidebar).toBeDefined();
  });
  test('method selectIem must be add class "selected"', () => {
    sidebar.otherElements.header.updateTitle = jest.fn();
    const testElement = document.querySelector('.menu-list-item');
    sidebar.selectItem(testElement);
    expect(sidebar.selected.classList.contains('selected')).toBeTruthy();
  });
  test('method bindOtherElement adds property', () => {
    sidebar.bindOtherElement('test', 1);
    expect(sidebar.otherElements.test).toBe(1);
  });
  test('the "init" method works correctly, launches the handler, the handler must launch methods on click', () => {
    const testElement = document.querySelector('.main');
    const widgetClass = testElement.classList[1];
    sidebar.otherElements.header.updateTitle = jest.fn();
    sidebar.widgets[widgetClass].activateWidget = jest.fn();
    testElement.click();
    expect(sidebar.widgets[widgetClass].activateWidget).toBeCalled();
    expect(sidebar.widgets[widgetClass].activateWidget).toBeCalledTimes(1);
    expect(sidebar.otherElements.header.updateTitle).toBeCalled();
    expect(sidebar.otherElements.header.updateTitle).toBeCalledTimes(1);
  });
});
