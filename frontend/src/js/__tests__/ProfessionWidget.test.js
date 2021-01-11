import ProfessionWidget from '../ui/widgets/ProfessionWidget';
import ProfessionCard from '../ui/cards/ProfessionCard';

describe('Test class ExpertsWidget', () => {
  const container = document.createElement('div');
  container.classList.add('widget', 'courses');
  const title = document.createElement('div');
  container.appendChild(title);
  const elementContainer = document.createElement('div');
  elementContainer.classList.add('profession-container', 'container');
  container.appendChild(elementContainer);
  const api = { test: 'test' };
  const widget = new ProfessionWidget(container, ProfessionCard, api);
  widget.loadContent();
  const result = [...elementContainer.children].every((item) => item.classList.contains('profession-card'));
  test('must return true if all elements pass the check', () => {
    expect(result).toBeTruthy();
  });
});
