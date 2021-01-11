import CoursesWidget from '../ui/widgets/CoursesWidget';
import CourseCard from '../ui/cards/CourseCard';

describe('Test class CoursesWidget:', () => {
  const container = document.createElement('div');
  container.classList.add('widget', 'courses');
  const title = document.createElement('div');
  container.appendChild(title);
  const elementContainer = document.createElement('div');
  elementContainer.classList.add('courses-container', 'container');
  container.appendChild(elementContainer);
  const api = { test: 'test' };
  const widget = new CoursesWidget(container, CourseCard, api);
  widget.loadContent();
  const result = [...elementContainer.children].every((item) => item.classList.contains('courses-card'));
  test('must return true if all elements pass the check', () => {
    expect(result).toBeTruthy();
  });
});
