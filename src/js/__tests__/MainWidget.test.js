import MainWidget from '../ui/widgets/MainWidget';

describe('Test class MainWidget', () => {
  const template = `
  <section class="widget main">
              <div class="control-bar horizontal">
                <div class="controls-label">Масштаб</div>
                <div class="controls scale-button decr">-</div>
                <div class="controls scale-button incr">+</div>
                <div class="controls-label">Прокрутка</div>
                <div class="controls roll-button prev-fast"><<<</div>
                <div class="controls roll-button prev"><</div>
                <div class="controls roll-button next">></div>
                <div class="controls roll-button next-fast">>>></div>
                <label class="controls-label" for="to-date">Перейти к дате:</label>
                <input 
                  type="date" 
                  name="calendar" 
                  value="1999-01-01"
                  id="to-date" 
                />
              </div>
              <div class="diagram-wrapper">
                <div class="control-bar vertical">
                  <div class="controls scale-button incr">+</div>
                  <div class="controls scale-button decr">|</div>
                </div>
                <div class="diagram container"></div>
              </div>
            </section>
  `;
  const container = document.createElement('div');
  container.innerHTML = template;
  const api = {
    event: {
      get() {
        console.log('test');
      },
    },
  };
  const widget = new MainWidget(container, '', api);
  widget.loadContent();
  test('colNumber should be 7', () => {
    expect(widget.colNumber).toBe(7);
  });
  test('activeDay should be 0', () => {
    expect(widget.activeDay).toBe(0);
  });
  test('toDay should be current date', () => {
    const testDate1 = new Date(widget.today).toLocaleDateString();
    const testDate2 = new Date().toLocaleDateString();
    expect(testDate1).toBe(testDate2);
  });
  test('dateEl should show the correct date', () => {
    const testDate = new Date(widget.today).toISOString().substr(0, 10);
    expect(widget.dateEl.value).toBe(testDate);
  });
  test('method get was called', () => {
    widget.api.event.get = jest.fn((x) => x);
    expect(widget.api.event.get('test')).toBe('test');
    expect(widget.api.event.get).toHaveBeenCalledTimes(1);
  });
  test('should be attribute at the tag', () => {
    expect([...widget.dateEl.attributes].map((el) => el.nodeName)).toContain(
      'type',
    );
    expect([...widget.dateEl.attributes].map((el) => el.nodeName)).toContain(
      'id',
    );
    expect([...widget.dateEl.attributes].map((el) => el.nodeName)).toContain(
      'name',
    );
    expect([...widget.dateEl.attributes].map((el) => el.nodeName)).toContain(
      'value',
    );
  });
  test('horizontalIncrEl must contain the following classes: "controls", "scale-button", "incr" ', () => {
    expect([...widget.horizontalIncrEl.classList]).toContain('controls');
    expect([...widget.horizontalIncrEl.classList]).toContain('scale-button');
    expect([...widget.horizontalIncrEl.classList]).toContain('incr');
  });
  test('horizontalDecrEl must contain the following classes: "controls", "scale-button", "decr" ', () => {
    expect([...widget.horizontalDecrEl.classList]).toContain('controls');
    expect([...widget.horizontalDecrEl.classList]).toContain('scale-button');
    expect([...widget.horizontalDecrEl.classList]).toContain('decr');
  });
  test('horizontalPrevEl must contain the following classes: "controls", "roll-button", "prev" ', () => {
    expect([...widget.horizontalPrevEl.classList]).toContain('controls');
    expect([...widget.horizontalPrevEl.classList]).toContain('roll-button');
    expect([...widget.horizontalPrevEl.classList]).toContain('prev');
  });
  test('horizontalNextEl must contain the following classes: "controls", "roll-button", "next" ', () => {
    expect([...widget.horizontalNextEl.classList]).toContain('controls');
    expect([...widget.horizontalNextEl.classList]).toContain('roll-button');
    expect([...widget.horizontalNextEl.classList]).toContain('next');
  });
  test('horizontalPrevFastEl must contain the following classes: "controls", "roll-button", "prev-fast" ', () => {
    expect([...widget.horizontalPrevFastEl.classList]).toContain('controls');
    expect([...widget.horizontalPrevFastEl.classList]).toContain('roll-button');
    expect([...widget.horizontalPrevFastEl.classList]).toContain('prev-fast');
  });
  test('horizontalNextFastEl must contain the following classes: "controls", "roll-button", "next-fast" ', () => {
    expect([...widget.horizontalNextFastEl.classList]).toContain('controls');
    expect([...widget.horizontalNextFastEl.classList]).toContain('roll-button');
    expect([...widget.horizontalNextFastEl.classList]).toContain('next-fast');
  });
  test('verticalIncrEl must contain the following classes: "controls", "scale-button", "inrc" ', () => {
    expect([...widget.verticalIncrEl.classList]).toContain('controls');
    expect([...widget.verticalIncrEl.classList]).toContain('scale-button');
    expect([...widget.verticalIncrEl.classList]).toContain('incr');
  });
  test('verticalDecrEl  must contain the following classes: "controls", "scale-button", "decr" ', () => {
    expect([...widget.verticalDecrEl.classList]).toContain('controls');
    expect([...widget.verticalDecrEl.classList]).toContain('scale-button');
    expect([...widget.verticalDecrEl.classList]).toContain('decr');
  });
  test('when you press the "horizontalIncrEl" button, the colNumber should decrease', () => {
    widget.horizontalIncrEl.click();
    expect(widget.colNumber).toBe(6);
  });
  test('colNumber value cannot become less than 0', () => {
    widget.colNumber = 1;
    widget.horizontalIncrEl.click();
    expect(widget.colNumber).not.toBe(0);
  });
  test('when you press the "horizontalIncrEl" button, the fillEvents() should be called', () => {
    widget.horizontalIncrEl.click();
    widget.api.event.get = jest.fn((x) => x);
    expect(widget.api.event.get('test')).toBe('test');
    expect(widget.api.event.get).toHaveBeenCalledTimes(1);
  });
  test('when you press the "horizontalDecrEl" button, the colNumber should increase', () => {
    widget.colNumber = 1;
    widget.horizontalDecrEl.click();
    expect(widget.colNumber).toBe(2);
  });
  test('when you press the "horizontalDecrEl" button, the fillEvents() should be called', () => {
    widget.horizontalDecrEl.click();
    widget.api.event.get = jest.fn((x) => x);
    expect(widget.api.event.get('test')).toBe('test');
    expect(widget.api.event.get).toHaveBeenCalledTimes(1);
  });
  test('when you press the "verticalIncrEl" button, the colNumber should increase', () => {
    widget.rowNumber = 2;
    widget.verticalIncrEl.click();
    expect(widget.rowNumber).toBe(1);
  });
  test('when you press the "verticalIncrEl" button, the fillEvents() should be called', () => {
    widget.verticalIncrEl.click();
    widget.api.event.get = jest.fn((x) => x);
    expect(widget.api.event.get('test')).toBe('test');
    expect(widget.api.event.get).toHaveBeenCalledTimes(1);
  });
  test('when you press the "verticalDecrEl" button, the colNumber should increase', () => {
    widget.rowNumber = 1;
    widget.verticalDecrEl.click();
    expect(widget.rowNumber).toBe(2);
  });
  test('when you press the "verticalDecrEl" button, the fillEvents() should be called', () => {
    widget.verticalDecrEl.click();
    widget.api.event.get = jest.fn((x) => x);
    expect(widget.api.event.get('test')).toBe('test');
    expect(widget.api.event.get).toHaveBeenCalledTimes(1);
  });
  test('when you press the "horizontalPrevEl" button, the rollDays() should be called', () => {
    widget.horizontalPrevEl.click();
    widget.rollDays = jest.fn((x) => x);
    expect(widget.rollDays('test')).toBe('test');
    expect(widget.rollDays).toHaveBeenCalledTimes(1);
  });
  test('when you press the "horizontalNextEl" button, the rollDays() should be called', () => {
    widget.horizontalNextEl.click();
    widget.rollDays = jest.fn((x) => x);
    expect(widget.rollDays('test')).toBe('test');
    expect(widget.rollDays).toHaveBeenCalledTimes(1);
  });
  test('when you press the "horizontalPrevFastEl" button, the rollDays() should be called', () => {
    widget.horizontalPrevFastEl.click();
    widget.rollDays = jest.fn((x) => x);
    expect(widget.rollDays('test')).toBe('test');
    expect(widget.rollDays).toHaveBeenCalledTimes(1);
  });
  test('when you press the "horizontalNextFastEl" button, the rollDays() should be called', () => {
    widget.horizontalNextFastEl.click();
    widget.rollDays = jest.fn((x) => x);
    expect(widget.rollDays('test')).toBe('test');
    expect(widget.rollDays).toHaveBeenCalledTimes(1);
  });
});
