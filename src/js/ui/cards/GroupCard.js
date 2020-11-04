import BaseCard from './BaseCard';

export default class GroupCard extends BaseCard {
  createCard({ name }) {
    this.cardEl = document.createElement('article');
    this.cardEl.classList.add('group-card');
    this.cardEl.innerHTML = this.template.group;
    const container = this.parent.querySelector('.groups-container');
    container.appendChild(this.cardEl);
    const courseNameEl = this.cardEl.querySelector('.link-unit-group');
    courseNameEl.innerText = name;
  }
}
