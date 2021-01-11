import Header from '../ui/Header';
import Sidebar from '../ui/Sidebar';

describe('Test class Header', () => {
  document.body.insertAdjacentHTML(
    'afterbegin',
    `<div class="wrapper-page container">
<div class="header-page">
    <h1 class="header-title">Главная</h1>
    <a class="header-info-link login" href="#">Авторизация</a>
    <a class="header-info-link register" href="#">Регистрация</a>
    <button class="header-humb" type="button">
        <span class="visually-hidden">Открыть меню</span>
        <span class="header-humb-line"></span>
      </button>
</div>
<aside class="sidebar sidebar-toggle"></aside>
</div>`,
  );
  const container = document.querySelector('.wrapper-page.container');
  const headerEl = container.querySelector('.header-page');
  const sidebarEl = container.querySelector('.sidebar');
  const header = new Header(headerEl);
  const sidebar = new Sidebar(sidebarEl);
  header.bindOtherElement('sidebar', sidebar);
  // eslint-disable-next-line func-names
  header.otherElements.modal = function () {};

  test('should not be created without passing a parameter to the constructor', () => {
    function formNotCreated() {
      try {
        return new Header();
      } catch (e) {
        throw new Error(e);
      }
    }
    expect(formNotCreated).toThrow();
  });
  test('should be create object', () => {
    expect(header).toBeDefined();
  });
  test('initialization is correct', () => {
    const expectTitle = '<h1 class="header-title">Главная</h1>';
    const expectLogin = '<a class="header-info-link login" href="#">Авторизация</a>';
    const expectRegister = '<a class="header-info-link register" href="#">Регистрация</a>';
    const expectButton = `<button class="header-humb" type="button">
        <span class="visually-hidden">Открыть меню</span>
        <span class="header-humb-line"></span>
      </button>`;
    const expectButtonHumb = '<span class="header-humb-line"></span>';
    expect(header.titleEl.outerHTML).toBe(expectTitle);
    expect(header.loginEl.outerHTML).toBe(expectLogin);
    expect(header.registerEl.outerHTML).toBe(expectRegister);
    expect(header.humbEl.outerHTML).toBe(expectButton);
    expect(header.btnHumb.outerHTML).toBe(expectButtonHumb);
  });
  test('handlers should work correctly', () => {
    header.humbEl.click();
    expect(header.btnHumb.classList.contains('header-humb-close')).toBeTruthy();
    header.otherElements.modal.showForm = jest.fn();
    header.loginEl.click();
    header.registerEl.click();
    expect(header.otherElements.modal.showForm).toBeCalledTimes(2);
  });
  test('the title should be updated', () => {
    header.updateTitle('Test');
    expect(header.titleEl.innerText).toBe('Test');
  });
  test('method bindOtherElement adds property', () => {
    header.bindOtherElement('test', 1);
    expect(header.otherElements.test).toBe(1);
  });
});
