import { expect } from 'chai';

describe('babel-preset-node5', () => {
  it('parameters', () => {
    const arrayOf = (...args) => args;
    const sum = (a = 1, b = a) => a + b;

    expect(arrayOf(1, 2, 3)).eql([1, 2, 3]);
    expect(sum()).equal(2);
  });

  it('regexps', () => {
    expect('𠮷'.match(/^.$/u)[0].length).equal(2); // eslint-disable-line no-empty-character-class
    expect('𝌆'.match(/\u{1d306}/u)[0].length).equal(2); // eslint-disable-line no-empty-character-class
  });

  describe('spread operator', () => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
    it('supports function call syntax', () => {
      function myFunction(a, b) {
        return [a, b];
      }
      expect(myFunction(...[1, 2])).to.eql([1, 2]);
    });

    it('supports array literal syntax', () => {
      const a = [2, 3];
      const b = [1, ...a, 4];
      expect(b).to.eql([1, 2, 3, 4]);
    });

    it('supports destructuring', () => {
      const [a, b, ...c] = [1, 2, 3, 4]; // eslint-disable-line no-unused-vars
      expect(c).to.eql([3, 4]);
    });
  });
});
