import ExpertCard from '../ui/cards/ExpertCard';
import cardTemplates from '../ui/cards/cardTemplate';

describe('test class CoursesCard', () => {
  test('the constructor must accept a "parent"', () => {
    const parent = document.createElement('div');
    const card = new ExpertCard(parent);
    expect(card.parent.outerHTML).toBe('<div></div>');
  });
  test('key template is created', () => {
    const parent = document.createElement('div');
    const card = new ExpertCard(parent);
    expect(card.template).toEqual(cardTemplates);
  });
  test('checking for classes "expert-card", "course-name-link" and header', () => {
    const testObject = {
      type: 'преподаватель',
      name: 'Владимир Чебукин',
      position: 'Веб разработчик',
    };
    const parent = document.createElement('div');
    const card = new ExpertCard(parent);
    card.parent.container = document.createElement('div');
    card.createCard(testObject);
    document.body.insertAdjacentElement('afterbegin', card.cardEl);
    const linkTitleCheckClass = document.querySelector('.expert-name-link');
    expect(card.cardEl.classList.contains('expert-card')).toBeTruthy();
    expect(
      linkTitleCheckClass.classList.contains('expert-name-link'),
    ).toBeTruthy();
    expect(linkTitleCheckClass.innerText).toBe(testObject.name);
  });
});
