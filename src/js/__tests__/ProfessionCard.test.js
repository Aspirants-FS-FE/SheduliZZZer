import ProfessionCard from '../ui/cards/ProfessionCard';
import cardTemplates from '../ui/cards/cardTemplate';

describe('test class CoursesCard', () => {
  test('the constructor must accept a "parent"', () => {
    const parent = document.createElement('div');
    const card = new ProfessionCard(parent);
    expect(card.parent.outerHTML).toBe('<div></div>');
  });
  test('key template is created', () => {
    const parent = document.createElement('div');
    const card = new ProfessionCard(parent);
    expect(card.template).toEqual(cardTemplates);
  });
  test('checking for classes "expert-card", "course-name-link" and header', () => {
    const testObject = { name: 'Android-разработчик с нуля' };
    const parent = document.createElement('div');
    const card = new ProfessionCard(parent);
    card.parent.container = document.createElement('div');
    card.createCard(testObject);
    document.body.insertAdjacentElement('afterbegin', card.cardEl);
    const linkTitleCheckClass = document.querySelector('.prof-link');
    expect(card.cardEl.classList.contains('profession-card')).toBeTruthy();
    expect(linkTitleCheckClass.classList.contains('prof-link')).toBeTruthy();
    expect(linkTitleCheckClass.innerText).toBe(testObject.name);
  });
});
