import Entity from '../api/Entity';

describe('Test class Entity', () => {
  test('should be create object', () => {
    const element = '/get_groups';
    const testObj = new Entity(element);
    expect(testObj).toBeDefined();
  });
  test('', () => {
    const entity = new Entity('/get_groups');
    const testData = { test: 'test' };
    const testFunction = jest.fn((data) => data);
    entity.get = testFunction(testData);
    expect(entity.get).toEqual({ test: 'test' });
  });
});
