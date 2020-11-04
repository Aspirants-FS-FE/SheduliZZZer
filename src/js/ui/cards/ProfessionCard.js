import BaseCard from './BaseCard';

export default class ProfessionCard extends BaseCard {
  createCard({ name }) {
    this.cardEl = document.createElement('article');
    this.cardEl.classList.add('profession-card');
    this.cardEl.innerHTML = this.template.profession;
    const container = this.parent.querySelector('.profession-container');
    container.appendChild(this.cardEl);
    const professionNameEl = this.cardEl.querySelector('.prof-link');
    professionNameEl.innerText = name;
  }
}
