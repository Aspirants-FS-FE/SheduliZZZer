import cardTemplate from './cardTemplate';

export default class BaseCard {
  constructor(parent) {
    this.parent = parent;
    this.template = cardTemplate;
  }

  createCard() {}

  addCard() {}

  delCard() {}

  editCard() {}
}
