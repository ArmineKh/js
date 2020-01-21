
// import {
//   __.__.assertThat, __.equalTo, __.__.not,
//   __.Matcher,
// } from 'hamjest';
var __ = require('hamjest');

describe('The matcher `__.strictlyEqualTo()`, matches strict equality (like `===`)', () => {
  describe('for simple types', () => {
    it('`null`', () =>
      __.assertThat(null, __.strictlyEqualTo(null)));
    it('`undefined`', () =>
      __.assertThat(undefined, __.strictlyEqualTo(undefined)));

    it('a (integer) number', () =>
      __.assertThat(1, __.strictlyEqualTo(1)));
    it('a (decimal) number', () =>
      __.assertThat(1.23, __.strictlyEqualTo(1.23)));
    it('a number and a `Number(x)`', () =>
      __.assertThat(1, __.strictlyEqualTo(Number(1))));

    it('a string', () =>
      __.assertThat('a string', __.strictlyEqualTo('a string')));
    it('a string and a String(x)', () =>
      __.assertThat('a string', __.strictlyEqualTo(String('a string'))));

    it('__.NOT for `NaN`', () =>
      __.assertThat(NaN, __.not(__.strictlyEqualTo(NaN))));
  });
  describe('for complex types', () => {
    it('the same empty []', () => {
      const emptyArr = [];
      __.assertThat(emptyArr, __.strictlyEqualTo(emptyArr));
    });
    it('__.NOT for comparing any empty array', () => {
      __.assertThat([], __.not(__.strictlyEqualTo([])));
    });

    it('the same empty object', () => {
      const emptyObj = {};
      __.assertThat(emptyObj, __.strictlyEqualTo(emptyObj));
    });
    it('__.NOT for comparing any empty object', () => {
      __.assertThat([], __.not(__.strictlyEqualTo([])));
    });
    it('__.NOT any empty Object()', () =>
      __.assertThat(new Object(), __.not(__.strictlyEqualTo({}))));

    it('function', () => {
      const fn = () => {};
      __.assertThat(fn, __.strictlyEqualTo(fn));
    });
    it('class', () => {
      class X {}
      __.assertThat(X, __.strictlyEqualTo(X));
    });
    it('the same instance of a class', () => {
      class X {}
      const instance = new X();
      __.assertThat(instance, __.strictlyEqualTo(instance));
    });
    it('__.NOT for a__.nother instance of a class', () => {
      class X {}
      const instance = new X();
      __.assertThat(instance, __.not(__.strictlyEqualTo(new X())));
    });
  });
  describe('deep compares', () => {
    describe('two different arrays', () => {
      it('__.NOT successfully, WHEN both have the same values', () =>
        __.assertThat([1, 2, 3], __.not(__.strictlyEqualTo([1, 2, 3]))));
      it('__.NOT successfully, WHEN the values differ', () =>
        __.assertThat(['x', 'y', 'z'], __.not(__.strictlyEqualTo([1, 2, 3]))));
    });
    it('successfully, WHEN it`s the same array', () => {
      const arr = [1, 2, 3];
      __.assertThat(arr, __.strictlyEqualTo(arr))
    });

    describe('two different objects', () => {
      it('__.NOT successfully, WHEN both have the same values', () =>
        __.assertThat({attr: 'value'}, __.not(__.strictlyEqualTo({attr: 'value'}))));
      it('__.NOT successfully, WHEN the values differ', () =>
        __.assertThat({one: 'two'}, __.not(__.strictlyEqualTo({attr: 'value'}))));
    });
    it('successfully, WHEN it`s the same object', () => {
      const obj = {attr: 'value'};
      __.assertThat(obj, __.strictlyEqualTo(obj))
    });
  });

  it('and returns a hamjest matcher', () => {
    const value = __.strictlyEqualTo();
    __.assertThat('Expected to get a hamjest Matcher.', Matcher.isMatcher(value), __.strictlyEqualTo(true));
  });
});
