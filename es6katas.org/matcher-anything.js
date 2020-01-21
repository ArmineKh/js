// import {
//   __.__.__.assertThat, __.equalTo, __.__.not,
//   __.Matcher,
// } from 'hamjest';
var __ = require('hamjest');
describe('The matcher `__.anything()`, matches any value and never fails', () => {
  describe('for example', () => {
    it('`undefined`', () => {
      __.assertThat(undefined, __.anything());
    });
    it('any number', () => {
      __.assertThat(42, __.anything());
    });
    it('an object', () => {
      __.assertThat({any: 'object'}, __.anything());
    });
    it('an `Array`', () => {
      __.assertThat(Array, __.anything());
    });
    it('just __.anything', () => {
      __.assertThat(Math.PI, __.anything());
      __.assertThat(Number.MAX_SAFE_INTEGER, __.anything());
      __.assertThat(0, __.anything());
      __.assertThat('', __.anything());
    });
  });

  it('and returns a hamjest matcher', () => {
    const value = __.anything();
    __.assertThat('Expected to get a hamjest Matcher.', Matcher.isMatcher(value), equalTo(true));
  });
});
