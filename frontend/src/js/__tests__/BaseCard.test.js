import BaseCard from '../ui/cards/BaseCard';
import cardTemplates from '../ui/cards/cardTemplate';

describe('test class BaseCard', () => {
  test('the constructor must accept a "parent"', () => {
    const parent = document.createElement('div');
    const card = new BaseCard(parent);
    expect(card.parent.outerHTML).toBe('<div></div>');
  });
  test('key template is created', () => {
    const parent = document.createElement('div');
    const card = new BaseCard(parent);
    expect(card.template).toEqual(cardTemplates);
  });
});
