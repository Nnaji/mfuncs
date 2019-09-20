const min = require('../minfunc');
const chai = require('chai');
const expect = chai.expect;

describe('Minimum value function unit tests', () => {
  let numOne = 1;
  let numTwo = 2;
  let numThree = 3;
  let numTen = 10;
  let numTwenty = 20;
  let numThirty = 30;
  let numFourty = 40;
  let numFifty = 50;
  let numArray = [
    numOne,
    numTwo,
    numThree,
    numTen,
    numTwenty,
    numThirty,
    numFourty,
    numFifty,
  ];
  describe('Minimum Value Test', () => {
    it('should return 3 as the minimum Value', () => {
      expect(
        min.min(numThree, numTen, numTwenty, numThirty, numFourty, numFifty),
      ).to.equal(numThree);
    });
  });

  describe('Minimum Value', () => {
    it('should return 10', () => {
      expect(
        min.min(numTen, numTwenty, numThirty, numFourty, numFifty),
      ).to.eqls(numTen);
    });
  });

  describe('Minimum Value function', () => {
    it('should return 1 as the minimum values', () => {
      expect(min.min(...numArray)).to.equal(numOne);
    });
  });

  describe('Minimum Value undefined', () => {
    it('should return undefined, when no argument is passed', () => {
      expect(min.min()).to.be.undefined;
    });
  });

  describe('Minimum Value null', () => {
    it('should not be null', () => {
      expect(min.min()).not.to.be.null;
    });
  });
});
