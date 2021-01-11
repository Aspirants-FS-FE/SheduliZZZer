import AppController from '../AppController';
import Header from '../ui/Header';
import Sidebar from '../ui/Sidebar';
import Modal from '../ui/Modal';
// Widgets
import CoursesWidget from '../ui/widgets/CoursesWidget';
import FaqWidget from '../ui/widgets/FaqWidget';
import GroupsWidget from '../ui/widgets/GroupsWidget';
import MainWidget from '../ui/widgets/MainWidget';
import ExpertsWidget from '../ui/widgets/ExpertsWidget';
import ProfessionWidget from '../ui/widgets/ProfessionWidget';
// API
import Event from '../api/Event';
import Coordinator from '../api/Coordinator';
import Course from '../api/Course';
import Direction from '../api/Direction';
import Expert from '../api/Expert';
import Group from '../api/Group';
import Person from '../api/Person';
import Profession from '../api/Profession';

jest.mock('../ui/Header', () => jest.fn().mockImplementation(() => ({ bindOtherElement: () => {} })));
jest.mock('../ui/Sidebar', () => jest.fn().mockImplementation(() => ({ bindOtherElement: () => {} })));
jest.mock('../ui/Modal', () => jest.fn().mockImplementation(() => ({ bindOtherElement: () => {} })));
jest.mock('../ui/widgets/CoursesWidget', () => jest.fn().mockImplementation(() => ({ courses: 'test' })));
jest.mock('../ui/widgets/FaqWidget', () => jest.fn().mockImplementation(() => ({ faq: 'test' })));
jest.mock('../ui/widgets/GroupsWidget', () => jest.fn().mockImplementation(() => ({ groups: 'test' })));
jest.mock('../ui/widgets/MainWidget', () => jest.fn().mockImplementation(() => ({ main: 'test' })));
jest.mock('../ui/widgets/ExpertsWidget', () => jest.fn().mockImplementation(() => ({ experts: 'test' })));
jest.mock('../ui/widgets/ProfessionWidget', () => jest.fn().mockImplementation(() => ({ profession: 'test' })));
jest.mock('../api/Event', () => jest.fn().mockImplementation(() => ({ event: 'test' })));
jest.mock('../api/Coordinator', () => jest.fn().mockImplementation(() => ({ coordinator: 'test' })));
jest.mock('../api/Course', () => jest.fn().mockImplementation(() => ({ course: 'test' })));
jest.mock('../api/Direction', () => jest.fn().mockImplementation(() => ({ direction: 'test' })));
jest.mock('../api/Expert', () => jest.fn().mockImplementation(() => ({ expert: 'test' })));
jest.mock('../api/Group', () => jest.fn().mockImplementation(() => ({ group: 'test' })));
jest.mock('../api/Person', () => jest.fn().mockImplementation(() => ({ person: 'test' })));
jest.mock('../api/Profession', () => jest.fn().mockImplementation(() => ({ profession: 'test' })));

describe('Test class AppController', () => {
  beforeEach(() => {
    Header.mockClear();
    Sidebar.mockClear();
    Modal.mockClear();
    CoursesWidget.mockClear();
    FaqWidget.mockClear();
    GroupsWidget.mockClear();
    MainWidget.mockClear();
    ExpertsWidget.mockClear();
    ProfessionWidget.mockClear();
    Event.mockClear();
    Coordinator.mockClear();
    Profession.mockClear();
    Group.mockClear();
    Expert.mockClear();
    Course.mockClear();
    Direction.mockClear();
    Person.mockClear();
  });
  test('should not be created without passing a parameter to the constructor', () => {
    function formNotCreated() {
      try {
        return new AppController();
      } catch (e) {
        throw new Error(e);
      }
    }
    expect(formNotCreated).toThrow();
  });
  test('should be create object', () => {
    const element = 'element';
    const form = new AppController(element);
    expect(form).toBeDefined();
  });
  test('the "updateHeader" method should change the contents of the container', () => {
    const testElement = document.createElement('div');
    testElement.classList.add('container');
    const headerTitle = document.createElement('div');
    headerTitle.classList.add('header-title');
    testElement.appendChild(headerTitle);
    document.body.insertAdjacentElement('afterbegin', testElement);
    const form = new AppController(testElement);
    form.updateHeader('test');
    expect(form.container.textContent === 'test').toBeTruthy();
  });
  test('the "init" method must call the "initAPI, initWidgets, this.widgets.activeWidget" method', () => {
    const testElement = document.createElement('div');
    testElement.classList.add('container');
    const headerTitle = document.createElement('div');
    headerTitle.classList.add('header-title');
    testElement.appendChild(headerTitle);
    document.body.insertAdjacentElement('afterbegin', testElement);
    const form = new AppController(testElement);
    form.initAPI = jest.fn();
    form.initWidgets = jest.fn();
    form.widgets = {};
    form.widgets.main = function activateWidget() {};
    form.widgets.main.activateWidget = jest.fn();
    form.init();
    expect(form.initAPI).toBeCalled();
    expect(form.initWidgets).toBeCalled();
    expect(form.widgets.main.activateWidget).toBeCalled();
  });
  test('the "initWidgets" return object objects', () => {
    const testElement = document.createElement('div');
    const form = new AppController(testElement);
    form.initWidgets();
    expect(form.widgets).toEqual({
      main: { main: 'test' },
      profession: { profession: 'test' },
      courses: { courses: 'test' },
      groups: { groups: 'test' },
      faq: { faq: 'test' },
      experts: { experts: 'test' },
    });
  });
  test('the "initAPI" return object objects', () => {
    const testElement = document.createElement('div');
    const form = new AppController(testElement);
    form.initAPI();
    expect(form.api).toEqual({
      event: { event: 'test' },
      coordinator: { coordinator: 'test' },
      course: { course: 'test' },
      direction: { direction: 'test' },
      expert: { expert: 'test' },
      group: { group: 'test' },
      person: { person: 'test' },
      profession: { profession: 'test' },
    });
  });
});
