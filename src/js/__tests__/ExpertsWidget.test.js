import ExpertsWidget from '../ui/widgets/ExpertsWidget';
import ExpertCard from '../ui/cards/ExpertCard';

describe('Test class ExpertsWidget', () => {
  const container = document.createElement('div');
  container.classList.add('widget', 'courses');
  const title = document.createElement('div');
  container.appendChild(title);
  const elementContainer = document.createElement('div');
  elementContainer.classList.add('experts-container', 'container');
  container.appendChild(elementContainer);
  const api = {
    expert: {
      get() {
        console.log('test');
      },
    },
  };
  const widget = new ExpertsWidget(container, ExpertCard, api);
  widget.api.expert.get = jest.fn();

  test('loadContent to be called', () => {
    widget.loadContent();
    expect(widget.api.expert.get).toBeCalled();
  });
  test('fillExperts to be called', () => {
    widget.endProgress = jest.fn();
    const data = {
      experts: [
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
    widget.fillExperts(data);
    expect(widget.endProgress).toBeCalled();
  });
});
