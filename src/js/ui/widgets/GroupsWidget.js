import BaseWidget from './BaseWidget';

const groups = [
  { name: 'MQ-28' },
  { name: 'AHJ-9' },
  { name: 'RA-24' },
  { name: 'RA-24' },
  { name: 'RA-24' },
  { name: 'RA-24' },
  { name: 'RA-24' },
  { name: 'RA-24' },
  { name: 'RA-24' },
  { name: 'RA-24' },
  { name: 'RA-24' },
];

export default class GroupsWidget extends BaseWidget {
  loadContent() {
    groups.forEach((group) => this.card.createCard(group));
  }
}
