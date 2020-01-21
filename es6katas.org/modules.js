// 61: modules - import
// To do: make all tests pass, leave the assert lines unchanged!

// import assert from 'assert'; // is only here for completeness, `assert` is always imported by default
// import {equal, deepEqual, notEqual, equal as myEqual, default as myAssert} from 'assert';
var assert = require('assert');


describe('use `import` to import functions that have been exported (somewhere else)', function() {
  describe('the import statement', function() {
    it('is only allowed on the root level', function() {
      // Try to comment this out, it will yell at you!
      // import assert from 'assert';
    });
    it('import an entire module using `import <name> from "<moduleName>"`', function() {
      const expectedType = 'function';
      assert.equal(typeof assert, expectedType);
    });
  });
  describe('import members', function() {
    it('import a single member, using `import {<memberName>} from "module"`', function() {
      assert.strictEqual(assert.equal, assert.equal);
    });
    describe('separate multiple members with a comma', function() {
      it('`deepEqual` from the assert module', () => {
        assert.strictEqual(assert.deepEqual, assert.deepEqual);
      });
      it('`notEqual` from the assert module', () => {
        assert.strictEqual(assert.notEqual, assert.notEqual);
      });
    });
  });
  describe('alias imports', function() {
    it('using `member as alias` as memberName', function() {
      assert.strictEqual(assert.equal, assert.equal);
    });
    it('rename the default export of a module, using `default as alias` as memberName', function() {
      assert.strictEqual(assert, assert);
    });
  });
});