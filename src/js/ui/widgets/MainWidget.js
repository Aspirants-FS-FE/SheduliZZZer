import BaseWidget from './BaseWidget';

export default class MainWidget extends BaseWidget {
  loadContent() {
    this.initControls();
    this.colNumber = 7;
    this.rowNumber = 15;
    const today = new Date();
    this.dateEl.value = today.toISOString().substr(0, 10);
    this.createGrid();
    this.markGrid();

    // const date = today.toLocaleString(
    //   'ru',
    //   {
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric'
    //   });
  }

  createGrid() {
    this.diagramEl.innerHTML = '';
    this.diagramEl.style['grid-template-columns'] = `100px repeat(${this.colNumber}, 2fr)`;
    for (let i = 0; i < (this.colNumber + 1) * this.rowNumber; i += 1) {
      const cellEl = document.createElement('div')
      cellEl.classList.add('cell');
      if (i && i < this.colNumber + 1) {
        cellEl.classList.add('date');
      } else if (i && !(i % (this.colNumber + 1))) {
        cellEl.classList.add('row-title');
      }
      this.diagramEl.appendChild(cellEl);
    }
    this.cells = Array.from(this.diagramEl.children);
  }

  markGrid() {
    const day = 1000 * 60 * 60 * 24;
    // const dateCells = this.element.querySelectorAll('.cell.date');
    console.log(dateCells);
  }

  initControls() {
    this.diagramEl = this.element.querySelector('.diagram');
    this.dateEl = this.element.querySelector('input[type=date]');
    this.horizontalIncrEl = this.element.querySelector('.horizontal .incr');
    this.horizontalDecrEl = this.element.querySelector('.horizontal .decr');
    this.verticalIncrEl = this.element.querySelector('.vertical .incr');
    this.verticalDecrEl = this.element.querySelector('.vertical .decr');
    console.log(this.verticalIncrEl);
    this.horizontalIncrEl.addEventListener('click', () => {
      this.colNumber -= (this.colNumber - 1) ? 1 : 0;
      this.createGrid();
    })
    this.horizontalDecrEl.addEventListener('click', () => {
      this.colNumber += 1;
      this.createGrid();
    })
    this.verticalIncrEl.addEventListener('click', () => {
      console.log('click');
      this.rowNumber -= 1;
      this.createGrid();
    })
    this.verticalDecrEl.addEventListener('click', () => {
      console.log('click');
      this.rowNumber += 1;
      this.createGrid();
    })
  }
}
