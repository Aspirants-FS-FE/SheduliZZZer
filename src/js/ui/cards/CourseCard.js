import BaseCard from './BaseCard';

export default class CourseCard extends BaseCard {
  createCard({ name }) {
    this.cardEl = document.createElement('article');
    this.cardEl.classList.add('courses-card');
    this.cardEl.innerHTML = this.template.course;
    const container = this.parent.querySelector('.courses-container');
    container.appendChild(this.cardEl);
    const courseNameEl = this.cardEl.querySelector('.course-name-link');
    courseNameEl.innerText = name;
  }
}
