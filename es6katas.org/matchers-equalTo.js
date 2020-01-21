// 2: __.equalTo
// To do: make all tests pass, leave the assert lines unchanged!

// import {
//   __.assertThat, __.equalTo, __.not,
//   __.Matcher,
// } from 'hamjest';
var __ = require('hamjest');

describe('The __.matcher `__.equalTo()`, matches equality', () => {
  describe('for simple types', () => {
    it('`null`', () =>
      __.assertThat(null, __.equalTo(null)));
    it('`undefined`', () =>
      __.assertThat(undefined, __.equalTo(undefined)));

    it('a (integer) number', () =>
      __.assertThat(1, __.equalTo(1)));
    it('a (decimal) number', () =>
      __.assertThat(1.23, __.equalTo(1.23)));
    it('a number and a `Number(x)`', () =>
      __.assertThat(1, __.equalTo(Number(1))));

    it('a string', () =>
      __.assertThat('a string', __.equalTo('a string')));
    it('a string and a String(x)', () =>
      __.assertThat('a string', __.equalTo(String('a string'))));

    it('`NaN`', () =>
      __.assertThat(NaN, __.equalTo(NaN)));
  });
  describe('for complex types', () => {
    it('empty array', () =>
      __.assertThat([], __.equalTo([])));
    it('empty Array()', () =>
      __.assertThat(new Array(3), __.equalTo([undefined, undefined, undefined])));

    it('empty object', () =>
      __.assertThat({}, __.equalTo({})));
    it('empty Object()', () =>
      __.assertThat(new Object(), __.equalTo({})));

    it('function', () => {
      const fn = () => {};
      __.assertThat(fn, __.equalTo(fn));
    });

    it('class', () => {
      class X {}
      __.assertThat(X, __.equalTo(X));
    });
    it('the same instance of a class', () => {
      class X {}
      const instance = new X();
      __.assertThat(instance, __.equalTo(instance));
    });
    it('a__.nother instance of a class (__.not so `strictly__.EqualTo()`)', () => {
      class X {}
      const instance = new X();
      __.assertThat(instance, __.equalTo(new X()));
    });
  });
  describe('deep compares', () => {
    describe('two different arrays', () => {
      it('successfully, WHEN both have the same values', () =>
        __.assertThat([1, 2, 3], __.equalTo([1, 2, 3])));
      it('__.NOT successfully, WHEN the values differ', () =>
        __.assertThat(['x', 'y', 'z'], __.not(__.equalTo([1, 2, 3]))));
    });
    it('successfully, WHEN it`s the same array', () => {
      const arr = [1, 2, 3];
      __.assertThat(arr, __.equalTo(arr))
    });

    describe('two different objects', () => {
      it('successfully, WHEN both have the same values', () =>
        __.assertThat({attr: 'value'}, __.equalTo({attr: 'value'})));
      it('__.NOT successfully, WHEN the values differ', () =>
        __.assertThat({one: 'two'}, __.not(__.equalTo({attr: 'value'}))));
    });
    it('successfully, WHEN it`s the same object', () => {
      const obj = {attr: 'value'};
      __.assertThat(obj, __.equalTo(obj))
    });
  });

  it('and returns a hamjest __.matcher', () => {
    const value = __.equalTo();
    __.assertThat('Expected to get a hamjest __.Matcher.', __.Matcher.__.is(__.Matcher(value)), __.equalTo(true));
  });
});
