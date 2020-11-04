import Sidebar from './ui/Sidebar';
import Header from './ui/Header';
import Modal from './ui/Modal';
import CoursesWidget from './ui/widgets/CoursesWidget';
import FaqWidget from './ui/widgets/FaqWidget';
import GroupsWidget from './ui/widgets/GroupsWidget';
import MainWidget from './ui/widgets/MainWidget';
import ExpertsWidget from './ui/widgets/ExpertsWidget';
import ProfessionWidget from './ui/widgets/ProfessionWidget';
import CourseCard from './ui/cards/CourseCard';
import GroupCard from './ui/cards/GroupCard';
// import EventCard from './ui/cards/EventCard';
import ExpertCard from './ui/cards/ExpertCard';
import ProfessionCard from './ui/cards/ProfessionCard';
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
    const headerEl = this.container.querySelector('.header-page');
    const sidebarEl = this.container.querySelector('.sidebar');
    const modalEl = this.container.querySelector('.modal');
    this.initAPI();
    this.initWidgets();
    this.header = new Header(headerEl);
    this.sidebar = new Sidebar(sidebarEl, this.widgets);
    this.modal = new Modal(modalEl);
    this.sidebar.bindOtherElement('header', this.header);
    this.header.bindOtherElement('sidebar', this.sidebar);
    this.header.bindOtherElement('modal', this.modal);
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
        '',
        this.api,
      ),
      profession: new ProfessionWidget(
        this.container.querySelector('.profession.widget'),
        ProfessionCard,
        this.api,
      ),
      courses: new CoursesWidget(
        this.container.querySelector('.courses.widget'),
        CourseCard,
        this.api,
      ),
      groups: new GroupsWidget(
        this.container.querySelector('.groups.widget'),
        GroupCard,
        this.api,
      ),
      faq: new FaqWidget(
        this.container.querySelector('.faq.widget'),
        '',
        this.api,
      ),
      experts: new ExpertsWidget(
        this.container.querySelector('.experts.widget'),
        ExpertCard,
        this.api,
      ),
    };
  }

  initAPI() {
    this.api = {
      event: new Event('/get_events'),
      coordinator: new Coordinator(''),
      course: new Course(''),
      direction: new Direction(''),
      expert: new Expert('/get_experts'),
      group: new Group('/get_groups'),
      person: new Person(''),
      profession: new Profession(''),
    };
  }
}
