import BaseWidget from './BaseWidget';

const experts = [
  { name: 'Иванов Иван Иванович' },
  { name: 'Петров Петр Петрович' },
  { name: 'Сидоров Сидор Сидорович' },
];

export default class ExpertsWidget extends BaseWidget {
  loadContent() {
    this.api.expert.get({}, this.fillExperts.bind(this));
  }

  fillExperts(data) {
    const expertsList = data.experts;
    expertsList.forEach((expert) => this.card.createCard(expert));
  }
}
