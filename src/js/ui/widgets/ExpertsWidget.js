import BaseWidget from './BaseWidget';

export default class ExpertsWidget extends BaseWidget {
  loadContent() {
    this.card.createCard();
  }
}
