const login = `
<form id="13" class="modal">
  <header class="header-form">
    <h1 class="form-title">Авторизация</h1>
  </header>
  <div class="fields">
    <div class="form-field">
      <label for="login">Логин:</label>
        <input 
          type="text" 
          name="login" 
          id="login"
        />
    </div>
    <div class="form-field">
      <label for="password">Пароль:</label>
      <input type="password" 
        name="password"
        id="password"
      />
    </div>
    <div class="form-control">
      <button type="submit">Войти</button>
      <button type="button" class="close">Отмена</button>
    </div>
  </div>
</form>`;

const register = `
<form id="12" class="modal">
  <header class="header-form">
    <h1 class="form-title">Регистрация</h1>
  </header>
  <div class="fields">
    <div class="form-field">
      <label for="surname">Фамилия:</label>
      <input
        type="text"
        pattern="^[a-zA-ZА-Яа-яЁё]+$"
        name="surname"
        id="surname"
        required
      />
    </div>
    <div class="form-field">
      <label for="first-name">Имя:</label>
      <input
        type="text"
        pattern="^[a-zA-ZА-Яа-яЁё]+$"
        name="first-name"
        id="first-name"
        required
      />
    </div>
    <div class="form-field">
      <label for="patronymic">Отчество:</label>
      <input
        type="text"
        name="patronymic"
        id="patronymic"
        pattern="^[a-zA-ZА-Яа-яЁё]+$"
      />
    </div>
    <div class="form-field">
      <label for="email">Почта:</label>
      <input 
        type="email" 
        name="email" 
        id="email" 
        required
      />
    </div>
    <div class="form-field">
      <label for="password-first">Пароль:</label>
      <input
        type="password"
        name="password-first"
        id="password-first"
        required
      />
    </div>
    <div class="form-field">
      <label for="password-repeat">Повторите пароль:</label>
      <input
        type="password"
        name="password-repeat"
        id="password-repeat"
        required
      />
    </div>
    <div class="form-control">
      <button type="submit">Зарегистрироваться</button>
      <button type="button" class="close">Отмена</button>
    </div>
  </div>
</form>`;

const event = '<div></div>';
const expert = '<div></div>';
const group = '<div></div>';
const profession = '<div></div>';

const formTemplate = {
  event,
  expert,
  group,
  login,
  register,
  profession,
};

export default formTemplate;
