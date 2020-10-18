import Sidebar from './ui/Sidebar';
import CoursesWidget from './ui/widgets/CoursesWidget';
import FaqWidget from './ui/widgets/FaqWidget';
import GroupsWidget from './ui/widgets/GroupsWidget';
import MainWidget from './ui/widgets/MainWidget';
import TeachersWidget from './ui/widgets/TeachersWidget';
import ProfessionWidget from './ui/widgets/ProfessionWidget';

export default class AppController {
  constructor(container) {
    this.container = container;
    this.init();
  }

  init() {
    const sidebarElement = this.container.querySelector('.sidebar');
    this.initWidgets();
    this.sidebar = new Sidebar(sidebarElement, this.widgets);
  }

  initWidgets() {
    this.widgets = {
      main: new MainWidget(this.container.querySelector('.main.widget')),
      profession: new ProfessionWidget(
        this.container.querySelector('.profession.widget'),
      ),
      courses: new CoursesWidget(
        this.container.querySelector('.courses.widget'),
      ),
      groups: new GroupsWidget(this.container.querySelector('.groups.widget')),
      faq: new FaqWidget(this.container.querySelector('.faq.widget')),
      teachers: new TeachersWidget(
        this.container.querySelector('.teachers.widget'),
      ),
    };
  }
}
