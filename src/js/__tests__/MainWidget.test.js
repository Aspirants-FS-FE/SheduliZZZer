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
});
