import Sidebar from './ui/Sidebar';
import CoursesWidget from './ui/widgets/CoursesWidget';
import FaqWidget from './ui/widgets/FaqWidget';
import GroupsWidget from './ui/widgets/GroupsWidget';
import MainWidget from './ui/widgets/MainWidget';
import TeachersWidget from './ui/widgets/TeachersWidget';
import ProfessionWidget from './ui/widgets/ProfessionWidget';
import Event from './api/Event';
import Coordinator from './api/Coordinator';
import Course from './api/Course';
import Direction from './api/Direction';
import Expert from './api/Expert';
import Group from './api/Group';
import Person from './api/Person';
import Profession from './api/Profession';

export default class AppController {
  constructor(container) {
    this.container = container;
  }

  init() {
    const sidebarElement = this.container.querySelector('.sidebar');
    this.initAPI();
    this.initWidgets();
    this.sidebar = new Sidebar(sidebarElement, this.widgets);
    this.sidebar.addAction(this.updateHeader.bind(this));
    this.widgets.main.activateWidget();
  }

  updateHeader(name) {
    this.headerTitle = this.container.querySelector('.header-title');
    this.headerTitle.textContent = name;
  }

  initWidgets() {
    this.widgets = {
      main: new MainWidget(
        this.container.querySelector('.main.widget'),
        this.api,
      ),
      profession: new ProfessionWidget(
        this.container.querySelector('.profession.widget'),
        this.api,
      ),
      courses: new CoursesWidget(
        this.container.querySelector('.courses.widget'),
        this.api,
      ),
      groups: new GroupsWidget(
        this.container.querySelector('.groups.widget'),
        this.api,
      ),
      faq: new FaqWidget(this.container.querySelector('.faq.widget'), this.api),
      teachers: new TeachersWidget(
        this.container.querySelector('.teachers.widget'),
        this.api,
      ),
    };
  }

  initAPI() {
    this.api = {
      event: new Event('/get_data'),
      coordinator: new Coordinator(''),
      course: new Course(''),
      direction: new Direction(''),
      expert: new Expert(''),
      group: new Group(''),
      person: new Person(''),
      profession: new Profession(''),
    };
  }
}
