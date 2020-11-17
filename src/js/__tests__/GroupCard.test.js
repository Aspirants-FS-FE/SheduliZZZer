import GroupCard from '../ui/cards/GroupCard';
import cardTemplates from '../ui/cards/cardTemplate';

describe('test class CoursesCard', () => {
  test('the constructor must accept a "parent"', () => {
    const parent = document.createElement('div');
    const card = new GroupCard(parent);
    expect(card.parent.outerHTML).toBe('<div></div>');
  });
  test('key template is created', () => {
    const parent = document.createElement('div');
    const card = new GroupCard(parent);
    expect(card.template).toEqual(cardTemplates);
  });
  test('checking for classes "expert-card", "course-name-link" and header', () => {
    const testObject = {
      name: 'devops-1',
    };
    const parent = document.createElement('div');
    const card = new GroupCard(parent);
    card.parent.container = document.createElement('div');
    card.createCard(testObject);
    document.body.insertAdjacentElement('afterbegin', card.cardEl);
    const linkTitleCheckClass = document.querySelector('.link-unit-group');
    expect(card.cardEl.classList.contains('group-card')).toBeTruthy();
    expect(
      linkTitleCheckClass.classList.contains('link-unit-group'),
    ).toBeTruthy();
    expect(linkTitleCheckClass.innerText).toBe(testObject.name);
  });
});
