import Entity from '../api/Entity';
import APIConnector from '../api/APIConnector';

jest.mock('../api/APIConnector', () => jest.fn().mockImplementation(() => ({
  getData(additionalURL, params, callback) {
    const fullURL = `https://test.test${additionalURL}`;
    callback(fullURL, params);
  },
})));

describe('Test class Entity', () => {
  beforeEach(() => {
    APIConnector.mockClear();
  });
  test('should be create object', () => {
    const element = '/get_groups';
    const testObj = new Entity(element);
    expect(testObj).toBeDefined();
  });
  test('the "get" metod must be return data', () => {
    const entity = new Entity('/get_groups');
    let lastRequest;
    function showObj(link, params) {
      lastRequest = { link, params };
    }
    entity.get('test', showObj);
    expect(lastRequest).toEqual({
      link: 'https://test.test/get_groups',
      params: 'test',
    });
  });
});
