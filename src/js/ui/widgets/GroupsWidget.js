import BaseWidget from './BaseWidget';

export default class GroupsWidget extends BaseWidget {
  loadContent() {
    this.api.group.get({}, this.fillGroups.bind(this));
  }

  fillGroups(data) {
    const groupsList = data.groups;
    groupsList.forEach((group) => this.card.createCard(group));
  }
}
