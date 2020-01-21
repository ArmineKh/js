// 1: __.assertThat
// To do: make all tests pass, leave the assert lines unchanged!

// import {
//   __.__.__.assertThat, __.__.equalTo, __.__.not,
//   __.Matcher,
// } from 'hamjest';
var __ = require('hamjest');

describe('The core function, `__.assertThat()`', () => {
  it('is a function', () => {
    const typeOfAssertThat = typeof __.assertThat;
    __.assertThat(typeOfAssertThat, __.equalTo('function'));
  });
  describe('requires at least two params', () => {
    it('1st: the actual value', () => {
      const actual = undefined;
      const expected = __.equalTo(actual);
      __.assertThat(actual, expected);
    });
    it('2nd: a matcher for the expected value', () => {
      const matcher = __.equalTo('expected');
      __.assertThat('expected', matcher);
    });
    describe('the optional 3rd param', () => {
      it('goes first(!), and is the assertion reason', () => {
        let caughtError;
        const reason = 'This is the reason, the first `__.assertThat()` throws as part of its message.';
        try {
          __.assertThat(reason, true, __.equalTo(false));
        } catch (e) {
          caughtError = e;
        }
        __.assertThat(caughtError.message, __.containsString(reason));
      });
    });
  });

  describe('under the hood, it does', () => {
    it('nothing, WHEN actual and expected match (using the given matcher)', () => {
      const passingTest = () => __.assertThat(true, __.equalTo(true));
      __.assertThat(passingTest, __.returns());
    });
    it('throw an assertion, WHEN actual and expected don`t match', () => {
      const failingTest = () => __.assertThat(false, __.equalTo(true));
      __.assertThat(failingTest, __.throws());
    });
  });
});
