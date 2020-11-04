import BaseWidget from './BaseWidget';

const experts = [
  { name: 'Иванов Иван Иванович' },
  { name: 'Петров Петр Петрович' },
  { name: 'Сидоров Сидор Сидорович' },
];

export default class ExpertsWidget extends BaseWidget {
  loadContent() {
    experts.forEach((expert) => this.card.createCard(expert));
  }
}
