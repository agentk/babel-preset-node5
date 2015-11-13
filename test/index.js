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

  describe('destructuring assignment', () => {
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

    it('swapping variables', () => {
      // After executing this code, b is 1 and a is 3. Without destructuring assignment, swapping two values requires a temporary variable (or, in some low-level languages, the XOR-swap trick).
      let a = 1;
      let b = 3;

      [a, b] = [b, a];
      return expect([a, b]).to.eql([3, 1]);
    });
  });

  describe('default parameters', () => {
    it('supports default parameters', () => {
      function myFunction(a = 'a', b = 'b', c = 'c') {
        return [a, b, c];
      }
      expect(myFunction(undefined, 2)).to.eql(['a', 2, 'c']);
      expect(myFunction()).to.eql(['a', 'b', 'c']);
    });

    it('supports function argument defaults', () => {
      // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Function_argument_defaults#Function_argument_defaults
      function drawES6Chart({ size: size = 'big', cords: cords = { x: 0, y: 0 }, radius: radius = 25 } = {}) {
        return { size, cords, radius };
      }
      const result = drawES6Chart({ cords: { x: 18, y: 30 }, radius: 30 });
      expect(result).to.have.deep.property('cords.x', 18);
    });
  });
});
