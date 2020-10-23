import BaseWidget from './BaseWidget';
import lessions from './testdata';

export default class MainWidget extends BaseWidget {
  loadContent() {
    this.initControls();
    this.colNumber = 7;
    this.rowNumber = 15;
    this.activeDay = 0;
    this.today = Date.now();
    this.dateEl.value = new Date(this.today).toISOString().substr(0, 10);
    this.createGrid();
  }

  initControls() {
    this.diagramEl = this.element.querySelector('.diagram');
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
      this.createGrid();
    });
    this.horizontalDecrEl.addEventListener('click', () => {
      this.colNumber += 1;
      this.createGrid();
    });
    this.verticalIncrEl.addEventListener('click', () => {
      this.rowNumber -= 1;
      this.createGrid();
    });
    this.verticalDecrEl.addEventListener('click', () => {
      this.rowNumber += 1;
      this.createGrid();
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
      const dateShift = Math.ceil(
        (new Date(targetDate) - new Date(this.today)) / day,
      ) - this.activeDay;
      this.rollDays(dateShift);
    });
  }

  rollDays(shifting) {
    this.activeDay += shifting;
    this.createGrid();
  }

  createGrid() {
    this.diagramEl.innerHTML = '';
    this.diagramEl.style['grid-template-columns'] = `100px repeat(${this.colNumber}, 2fr)`;
    for (let i = 0; i < (this.colNumber + 1) * this.rowNumber; i += 1) {
      const cellEl = document.createElement('div');
      cellEl.classList.add('cell');
      if (i && !(i % (this.colNumber + 1))) {
        cellEl.classList.add('row-title');
      }
      this.diagramEl.appendChild(cellEl);
    }
    this.cells = Array.from(this.diagramEl.children);
    this.mapDateRow();
    this.mapGroupColumn();
  }
  /* eslint no-param-reassign: "error" */

  mapDateRow() {
    const dateCells = this.cells.slice(1, this.colNumber + 1);
    [...dateCells].forEach((element, i) => {
      element.classList.add('date');
      const { dateStr, day } = this.getDate(i);
      element.innerText = dateStr;
      this.mapWeekend(i, day);
    });
  }

  mapGroupColumn() {
    const lessionList = JSON.parse(lessions);
    const groupObj = this.getGroupObject(lessionList);
    const groupCells = this.cells
      .filter((__, i) => !(i % (this.colNumber + 1)))
      .splice(1);
    groupCells.forEach((element) => {
      element.classList.add('row-title');
    });
    Object.keys(groupObj).forEach((key, i) => {
      groupCells[i].innerText = key;
      this.mapLessions(i + 2, groupObj[key]);
    });
  }

  mapLessions(rowNumber, lessions) {
    for (const lession of lessions) {
      const {
        date,
        lecture,
        teacher,
      } = lession;
      const lowerBound = (rowNumber - 1) * (this.colNumber + 1) + 1;
      const upperBound = rowNumber * (this.colNumber + 1);
      const rowCells = this.cells.slice(lowerBound, upperBound);
      rowCells.forEach((element, i) => {
        const { dateStr } = this.getDate(i);
        const lessionDate = this.getStringDate(new Date(date));
        if (dateStr === lessionDate) {
          element.classList.add('lession');
          element.innerText = lecture;
          element.title = teacher;
        }
      })
    }
  }

  getGroupObject(lessionList) {
    const groupObj = {};
    for (const lession of lessionList) {
      const {
        group,
        date,
        lecture,
        teacher,
      } = lession;
      if (!groupObj[group]) {
        groupObj[group] = []
      }
      groupObj[group].push({
        date,
        lecture,
        teacher,
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
    const mean = Math.floor(this.colNumber / 2);
    const date = new Date(this.today + (offset - mean + this.activeDay) * day);
    return {
      dateStr: this.getStringDate(date),
      day: date.getDay(),
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
    )
  }
}
