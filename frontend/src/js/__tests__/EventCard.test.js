import EventCard from '../ui/cards/EventCard';
import cardTemplates from '../ui/cards/cardTemplate';

describe('test class EventCard', () => {
  test('the constructor must accept a "parent"', () => {
    const parent = document.createElement('div');
    const card = new EventCard(parent);
    expect(card.parent.outerHTML).toBe('<div></div>');
  });
  test('key template is created', () => {
    const parent = document.createElement('div');
    const card = new EventCard(parent);
    expect(card.template).toEqual(cardTemplates);
  });
});
