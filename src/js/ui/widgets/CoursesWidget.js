import BaseWidget from './BaseWidget';

const courses = [
  { name: 'Адаптивная верстка' },
  { name: 'Основы программирования' },
  { name: 'HTML-верстка: с нуля до первого макета' },
  { name: 'Основы зельеварения' },
];

export default class CoursesWidget extends BaseWidget {
  loadContent() {
    courses.forEach((course) => this.card.createCard(course));
  }
}
