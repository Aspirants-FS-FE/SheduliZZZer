const expert = `
  <div class="expert-photo">
    <img
      class="expert-photo-img"
      alt="фото преподавателя"
    />
  </div>
  <div class="expert-content">
    <h2 class="expert-name">
      <a href="#0" class="expert-name-link link-unit">
        Иванов Иван Иванович
      </a>
    </h2>
    <ul class="list">
      <li>
        <a href="#0" class="link-unit">Курсы:</a>
        <ul class="list">
          <li class="title-entity">
            <a href="#0" class="title-entity-link">Название</a>
            <div>
              с:
              <time datetime="2020-07-01" class="time">
                01.07.2020
              </time>
            </div>
            <div>
              по:
              <time datetime="2020-07-01" class="time">
                01.09.2020
              </time>
            </div>
          </li>
          <li class="title-entity">
            <a href="#0" class="title-entity-link">Название</a>
            <div>
              с:
              <time datetime="2020-07-01" class="time">
                01.07.2020
              </time>
            </div>
            <div>
              по:
              <time datetime="2020-07-01" class="time">
                01.09.2020
              </time>
            </div>
          </li>
        </ul>
      </li>
      <li>
        <a href="#0" class="link-unit">Лекции:</a>
        <ul class="list">
          <li class="title-entity">
            <a href="#0" class="title-entity-link">Название</a>
            <time datetime="2020-07-01" class="time">
              01.07.2020
            </time>
          </li>
        </ul>
      </li>
      <li>
        <a href="#0" class="link-unit">Дипломы:</a>
        <ul class="list">
          <li class="title-entity">
            <a href="#0" class="title-entity-link">Название</a>
            <time datetime="2020-07-01" class="time">
              01.07.2020
            </time>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <button class="expert-btn">удалить</button>`;

const cardTemplates = {
  expert,
};

export default cardTemplates;
