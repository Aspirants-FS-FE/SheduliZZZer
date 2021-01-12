import BaseWidget from './BaseWidget';

const professions = [
  { name: 'Android-разработчик с нуля' },
  { name: 'Java-разработчик с нуля' },
  { name: 'Веб-разработчик с нуля' },
  { name: 'Python-разработчик с нуля' },
  { name: 'Backend Node.js-разработчик' },
  { name: 'Тестировщик ПО' },
  { name: 'Системный администратор' },
  { name: 'Frontend-разработчик с нуля' },
];

export default class ProfessionWidget extends BaseWidget {
  loadContent() {
    professions.forEach((profession) => this.card.createCard(profession));
  }
}
