// import {
//   __.__.__.assertThat, __.equalTo, __.__.__.not,
//   __.Matcher,
// } from 'hamjest';
var __ = require('hamjest');

describe('The matcher `__.defined()`, matches everything but `un__.defined`', () => {
  describe('for example', () => {
    it('any number', () => {
      __.assertThat(42, __.defined());
    });
    it('an object', () => {
      __.assertThat({any: 'object'}, __.defined());
    });
    it('an `Array`', () => {
      __.assertThat(Array, __.defined());
    });
    it('just about anything', () => {
      __.assertThat(Math.PI, __.defined());
      __.assertThat(Number.MAX_SAFE_INTEGER, __.defined());
      __.assertThat(0, __.defined());
      __.assertThat('', __.defined());
    });
  });
  describe('but __.not', () => {
    it('`undefined`', () => {
      __.assertThat(undefined, __.not(__.defined()));
    });
  });

  it('and returns a hamjest matcher', () => {
    const value = __.defined();
    __.assertThat('Expected to get a hamjest Matcher.', Matcher.isMatcher(value), equalTo(true));
  });
});
