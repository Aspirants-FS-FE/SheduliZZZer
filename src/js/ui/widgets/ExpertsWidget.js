import BaseWidget from './BaseWidget';

export default class ExpertsWidget extends BaseWidget {
  loadContent() {
    this.startProgress();
    this.api.expert.get({}, this.fillExperts.bind(this));
  }

  fillExperts(data) {
    this.endProgress;
    const expertsList = data.experts;
    expertsList.forEach((expert) => this.card.createCard(expert));
  }
}
