import APIConnector from '../api/APIConnector';

jest.mock('../api/APIConnector');

describe('test class APIConnector', () => {
  beforeEach(() => {
    APIConnector.mockClear();
  });
  test('method "encodeURL" must be return correctly string', () => {
    const testObj = {
      one: 'first',
      two: 'second',
    };
    const element = 'http://test.ru';
    const test = new APIConnector(element);
    test.encodeURL = jest.fn(() => ({
      one: 'first',
      two: 'second',
    }));
    const testString = test.encodeURL(testObj);
    expect(testString).toEqual({
      one: 'first', two: 'second',
    });
    expect(test.encodeURL).toBeCalledTimes(1);
  });

  test('fetch', () => {
    const element = 'http://test.ru';
    const test = new APIConnector(element);
    const users = [{ name: 'Bob' }];
    const resp = { data: users };
    test.getData.mockResolvedValue(resp);
    return test
      .getData()
      .then((data) => expect(data).toEqual({ data: [{ name: 'Bob' }] }));
  });
});
