import BaseWidget from './BaseWidget';

export default class GroupsWidget extends BaseWidget {
  loadContent() {
    this.startProgress();
    this.api.group.get({}, this.fillGroups.bind(this));
  }

  fillGroups(data) {
    this.endProgress();
    const groupsList = data.groups;
    groupsList.forEach((group) => this.card.createCard(group));
  }
}
