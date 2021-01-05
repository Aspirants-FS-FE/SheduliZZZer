import CourseCard from '../ui/cards/CourseCard';
import cardTemplates from '../ui/cards/cardTemplate';

describe('test class CoursesCard', () => {
  test('the constructor must accept a "parent"', () => {
    const parent = document.createElement('div');
    const card = new CourseCard(parent);
    expect(card.parent.outerHTML).toBe('<div></div>');
  });
  test('key template is created', () => {
    const parent = document.createElement('div');
    const card = new CourseCard(parent);
    expect(card.template).toEqual(cardTemplates);
  });
  test('checking for classes "courses-card", "course-name-link" and header', () => {
    const course = { name: 'Адаптивная верстка' };
    const parent = document.createElement('div');
    const card = new CourseCard(parent);
    card.parent.container = document.createElement('div');
    card.createCard(course);
    document.body.insertAdjacentElement('afterbegin', card.cardEl);
    const linkTitleCheckClass = document.querySelector(
      '.courses-card > h3 > a',
    );
    expect(card.cardEl.classList.contains('courses-card')).toBeTruthy();
    expect(
      linkTitleCheckClass.classList.contains('course-name-link'),
    ).toBeTruthy();
    expect(linkTitleCheckClass.innerText).toBe(course.name);
  });
});
