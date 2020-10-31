import Sidebar from './ui/Sidebar';
import Header from './ui/Header';
import Modal from './ui/Modal';
import CoursesWidget from './ui/widgets/CoursesWidget';
import FaqWidget from './ui/widgets/FaqWidget';
import GroupsWidget from './ui/widgets/GroupsWidget';
import MainWidget from './ui/widgets/MainWidget';
import TeachersWidget from './ui/widgets/TeachersWidget';
import ProfessionWidget from './ui/widgets/ProfessionWidget';
// import EventForm from './ui/forms/EventForm';
// import ExpertForm from './ui/forms/ExpertForm';
// import GroupForm from './ui/forms/GroupForm';
// import LoginForm from './ui/forms/LoginForm';
// import ProfessionForm from './ui/forms/ProfessionForm';
// import RegisterForm from './ui/forms/RegisterForm';
// import formTemplate from './ui/forms/formTemplate';
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
    const modalEl = this.container.querySelector('.overlay');
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

  initControls() {

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
      faq: new FaqWidget(
        this.container.querySelector('.faq.widget'),
        this.api,
      ),
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
