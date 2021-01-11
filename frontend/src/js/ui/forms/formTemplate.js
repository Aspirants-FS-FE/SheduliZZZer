const login = `
  <form class="page-form">
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
  <form class="page-form">
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

const event = `
  <form class="page-form">
    <header class="header-form">
      <h1 class="form-title">Добавить лекцию</h1>
    </header>
    <div class="fields">
      <div class="form-field">
        <label for="topic-title">Название лекции:</label>
        <input 
          type="text"
          name="topic-title"
          id="topic-title"
          required
        />
      </div>
      <div class="form-field">
        <label for="topic-title">Описание лекции:</label>
        <input 
          type="text"
          name="topic-title"
          id="topic-title"
        />
      </div>
      <div class="form-control">
        <button class="success" type="submit">Сохранить</button> 
        <button class="close" type="button">Отменить</button>
      </div> 
    </div>          
  </form>`;

const course = `
  <form class="page-form">
    <header class="header-form">
      <h1 class="form-title">Добавить курс</h1>
    </header>
    <div class="fields">              
      <div class="form-field">
        <label for="name-course">Название курса</label>
        <input 
          type="text"
          name="name-course"
          id="name-course"
        />
      </div>
      <div class="form-field">
        <label for="coord-course">Координатор курса</label>
        <input 
          type="text"
          name="coord-course"
          id="coord-course"
        />
      </div>                         
      <div class="form-control">
        <button class="success" type="submit">Сохранить</button> 
        <button class="close" type="button">Отменить</button>
      </div>
    </div>
  </form>`;

const expert = `
  <form class="page-form">
    <header class="header-form">
      <h1 class="form-title">Добавить лектора</h1>
    </header>
    <div class="fields">
      <div class="form-field">
        <label for="surname-lecturer">Фамилия</label>
        <input 
          type="text"
          name="surname-lecturer"
          id="surname-lecturer"
        />
      </div>
      <div class="form-field">
        <label for="name-lecturer">Имя</label>
        <input 
          type="text"
          name="name-lecturer"
          id="name-lecturer"
        />
      </div>
      <div class="form-field">
        <label for="patronymic-lecturer">Отчество</label>
        <input 
          type="text"
          name="patronymic-lecturer"
          id="patronymic-lecturer"
        />
      </div>
      <div class="form-control">
        <button class="success" type="submit">Сохранить</button> 
        <button class="close" type="button">Закрыть</button>
      </div>
    </div>
  </form>`;

const profession = `
  <form class="page-form">
    <header class="header-form">
      <h1 class="form-title">Добавить профессию:</h1>
    </header>
    <div class="fields">
      <div class="form-field">
        <label for="name_profession">Название профессии:</label>
        <input 
          type="text"
          name="name_profession"
          id="name_profession"
        />
      </div>             
      <div class="form-control">
        <button class="success" type="submit">Сохранить</button> 
        <button class="close" type="button">Закрыть</button>
      </div>
    </div>
  </form>`;

const group = '<div></div>';

const formTemplate = {
  course,
  event,
  expert,
  group,
  login,
  register,
  profession,
};

export default formTemplate;
