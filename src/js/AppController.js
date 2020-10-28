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
  }

  init() {
    const sidebarElement = this.container.querySelector('.sidebar');
    this.initWidgets();
    this.sidebar = new Sidebar(sidebarElement, this.widgets);
    this.sidebar.addAction(this.updateHeader.bind(this));
    this.widgets.main.activateWidget();
    // APIConnector.getData(main.mapGroupColumn.bind(main));
  }

  updateHeader(name) {
    this.headerTitle = this.container.querySelector('.header-title');
    this.headerTitle.textContent = name;
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
