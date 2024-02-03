import { classNames } from './classNames';

describe('classNames', () => {
  test('with one mods', () => {
    expect(classNames('root', {'foo': true}, [])).toBe('root foo');
  });

  test('with two mods', () => {
    expect(classNames('root', {'foo': true, 'bar': false}, [])).toBe('root foo');
  });

  test('with one param', () => {
    expect(classNames('root', {},[])).toBe('root ');
  });

  test('with additional params', () => {
    expect(classNames('root', {},['foo', 'bar'])).toBe('root foo bar ');
  });
  

  test('with mods undefined', () => {
    expect(classNames('root', {'foo': undefined}, [])).toBe('root ');
  });
});