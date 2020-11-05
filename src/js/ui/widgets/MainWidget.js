import BaseWidget from './BaseWidget';

export default class MainWidget extends BaseWidget {
  loadContent() {
    this.initControls();
    this.colNumber = 7;
    this.activeDay = 0;
    this.today = Date.now();
    this.dateEl.value = this.getDate(0).dateISO;
    this.fillEvents();
  }
  
  fillEvents() {
    const params = {
      start_date: this.getDate(0).dateISO,
      end_date: this.getDate(this.colNumber - 1).dateISO,
    };
    this.startProgress();
    this.api.event.get(params, this.createGrid.bind(this));
  }

  initControls() {
    this.dateEl = this.element.querySelector('input[type=date]');
    this.horizontalIncrEl = this.element.querySelector('.horizontal .incr');
    this.horizontalDecrEl = this.element.querySelector('.horizontal .decr');
    this.horizontalPrevEl = this.element.querySelector('.horizontal .prev');
    this.horizontalNextEl = this.element.querySelector('.horizontal .next');
    this.horizontalPrevFastEl = this.element.querySelector('.horizontal .prev-fast');
    this.horizontalNextFastEl = this.element.querySelector('.horizontal .next-fast');
    this.verticalIncrEl = this.element.querySelector('.vertical .incr');
    this.verticalDecrEl = this.element.querySelector('.vertical .decr');
    this.horizontalIncrEl.addEventListener('click', () => {
      this.colNumber -= (this.colNumber - 1) ? 1 : 0;
      this.this.fillEvents();
    });
    this.horizontalDecrEl.addEventListener('click', () => {
      this.colNumber += 1;
      this.fillEvents();
    });
    this.verticalIncrEl.addEventListener('click', () => {
      this.rowNumber -= 1;
      this.fillEvents();
    });
    this.verticalDecrEl.addEventListener('click', () => {
      this.rowNumber += 1;
      this.fillEvents();
    });
    this.horizontalPrevEl.addEventListener('click', () => {
      this.rollDays(-1);
    });
    this.horizontalNextEl.addEventListener('click', () => {
      this.rollDays(1);
    });
    this.horizontalPrevFastEl.addEventListener('click', () => {
      this.rollDays(-this.colNumber);
    });
    this.horizontalNextFastEl.addEventListener('click', () => {
      this.rollDays(this.colNumber);
    });
    this.dateEl.addEventListener('input', (event) => {
      const day = 1000 * 60 * 60 * 24;
      const targetDate = event.target.value;
      if (!targetDate) return null;
      const dateShift = Math.ceil(
        (new Date(targetDate) - new Date(this.today)) / day,
      ) - this.activeDay;
      this.rollDays(dateShift);
    });
  }

  rollDays(shifting) {
    this.activeDay += shifting;
    this.fillEvents();
  }

  createGrid(data) {
    this.rowNumber = new Set(data.events
      .map((event) => event.group)).size;
    this.container.innerHTML = '';
    this.container.style['grid-template-columns'] = `100px repeat(${this.colNumber}, 2fr)`;
    for (let i = 0; i < (this.colNumber + 1) * this.rowNumber; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      if (i && !(i % (this.colNumber + 1))) {
        cellEl.classList.add('row-title');
      }
      this.container.appendChild(cellEl);
    }
    this.cells = Array.from(this.container.children);
    this.mapDateRow();
    const params = {
      start_date: this.startDate.toISOString().substr(0, 10),
      end_date: this.endDate.toISOString().substr(0, 10),
    };
    this.api.event.get(params, this.mapGroupColumn.bind(this));
  }
  /* eslint no-param-reassign: "error" */

  mapDateRow() {
    this.dateCells = this.cells.slice(1, this.colNumber + 1);
    [...this.dateCells].forEach((element, i) => {
      element.classList.add('date');
      const { dateStr, day, date } = this.getDate(i);
      element.innerText = dateStr;
      this.mapWeekend(i, day);
      if (i === 0) {
        this.startDate = date;
      } else if (i === this.colNumber - 1) {
        this.endDate = date;
      }
    });
  }

  mapGroupColumn(data) {
    this.endProgress();
    const groupObj = this.getGroupObject(data.events);
    const groupCells = this.cells
      .filter((__, i) => !(i % (this.colNumber + 1)))
      .splice(1);
    groupCells.forEach((element) => {
      element.classList.add('row-title');
    });
    Object.keys(groupObj).forEach((key, i) => {
      if (groupCells[i]) {
        groupCells[i].innerText = key;
        this.mapEvents(i + 2, groupObj[key]);
      }
    });
  }

  mapEvents(rowNumber, eventsList) {
    for (const event of eventsList) {
      const {
        date,
        lecture,
        expert,
        time,
      } = event;
      const lowerBound = (rowNumber - 1) * (this.colNumber + 1) + 1;
      const upperBound = rowNumber * (this.colNumber + 1);
      const rowCells = this.cells.slice(lowerBound, upperBound);
      rowCells.forEach((element, i) => {
        const { dateStr } = this.getDate(i);
        const eventDate = this.getStringDate(new Date(date));
        if (dateStr === eventDate) {
          element.classList.add('event');
          element.innerText = lecture;
          element.title = expert;
        }
      });
    }
  }

  getGroupObject(eventList) {
    const groupObj = {};
    for (const event of eventList) {
      const {
        group,
        date,
        lecture,
        expert,
      } = event;
      if (!groupObj[group]) {
        groupObj[group] = [];
      }
      groupObj[group].push({
        date,
        lecture,
        expert,
      });
    }
    return groupObj;
  }

  mapWeekend(index, day) {
    if ([0, 6].includes(day)) {
      const position = (index % (this.colNumber + 1)) + 1;
      const weekends = this.cells
        .filter((__, i) => i % (this.colNumber + 1) === position);
      weekends.forEach((element) => {
        element.classList.add('weekend');
      });
    }
  }

  getDate(offset) {
    const day = 1000 * 60 * 60 * 24;
    const date = new Date(this.today + (offset + this.activeDay) * day);
    return {
      dateStr: this.getStringDate(date),
      dateISO: date.toISOString().substr(0, 10),
      day: date.getDay(),
      date,
    };
  }

  getStringDate(date) {
    return date.toLocaleString(
      'ru',
      {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      },
    );
  }
}
