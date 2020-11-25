import Entity from '../api/Entity';

describe('Test class Entity', () => {
  test('should be create object', () => {
    const element = '/get_groups';
    const testObj = new Entity(element);
    expect(testObj).toBeDefined();
  });
  test('', () => {
    const entity = new Entity('/get_groups');
    entity.get = jest.fn().mockImplementation((data) => 42 + data);
    expect(entity.get(1)).toBe(43);
  });
});
