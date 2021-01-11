import AppController from '../AppController';
import controller from '../app';

jest.mock('../AppController');
describe('test app.js logic', () => {
  beforeEach(() => {
    AppController.mockClear();
  });
  test('the constructor was called', () => {
    // eslint-disable-next-line no-unused-vars
    const testContainer = new AppController();
    expect(AppController).toHaveBeenCalledTimes(1);
  });
  test('the "init" method must be called', () => {
    expect(controller.init).toBeCalled();
  });
});
