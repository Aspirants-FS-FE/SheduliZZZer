import GroupsWidget from '../ui/widgets/GroupsWidget';
import GroupCard from '../ui/cards/GroupCard';

describe('Test class ExpertsWidget', () => {
  const container = document.createElement('div');
  container.classList.add('widget', 'courses');
  const title = document.createElement('div');
  container.appendChild(title);
  const elementContainer = document.createElement('div');
  elementContainer.classList.add('faq-container', 'container');
  container.appendChild(elementContainer);
  const api = {
    group: {
      get() {
        console.log('test');
      },
    },
  };
  const widget = new GroupsWidget(container, GroupCard, api);
  widget.api.group.get = jest.fn();

  test('loadContent to be called', () => {
    widget.loadContent();
    expect(widget.api.group.get).toBeCalled();
  });
  test('fillExperts to be called', () => {
    widget.endProgress = jest.fn();
    const data = {
      groups: [
        {
          additional:
            'Мы узнаем о $0 в консоли, познакомимся с HTMLCollection и различными доступами к элементам. Ждем вас на вебинаре!',
          date: '2020-03-05',
          group: 'bhj-9',
          id: '5dbd0ba3-9af0-d5a9-69b6-08a86cc903fc',
          isSent: true,
          lecture: 'Способы поиска нужного HTML-элемента',
          teacher: 'Владимир Чебукин',
          time: '19:00',
        },
      ],
    };
    widget.fillGroups(data);
    expect(widget.endProgress).toBeCalled();
  });
});
