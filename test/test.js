/**************************************************************
	@AUTHOR: Kingsley Nnaji <kingsley.nnaji@gmail.com>
	@LICENSE: MIT
	Creation Date : 03.09.2019
***************************************************************/

const mfunc = require('./../src');
const chai = require('chai');
const expect = chai.expect;

describe('Add function  unit tests', () => {
  let numOne = 1;
  let numTwo = 2;
  let numThree = 3;
  let numFour = 4;
  let numFive = 5;
  let numArray = [numOne, numTwo, numThree, numFour, numFive];

  describe('addx section', () => {
    it('should return the total of 15 when given numArray', () => {
      expect(mfunc.addx(numArray)).to.equals(15);
    });
  });

  describe('addx', () => {
    it('should take an input of an Array but not a number', () => {
      expect(mfunc.add(numArray)).not.to.be.a('number');
    });
  });

  describe('addx', () => {
    it('should not return an array', () => {
      expect(mfunc.addx(numArray)).to.be.a('number');
    });
  });

  describe('addx function', () => {
    it('should not be undefined define', () => {
      expect(mfunc.addx(numArray)).not.be.undefined;
    });
  });

  describe('addx function', () => {
    it('should not be null', () => {
      expect(mfunc.addx(numArray)).not.to.null;
    });
  });

  describe('add function test section', () => {
    it('should not be a string', () => {
      expect(mfunc.add(...numArray)).not.to.be.a('string');
    });
  });

  describe('add function', () => {
    it('should not return null', () => {
      expect(mfunc.add()).not.to.null;
    });
  });
});

describe('MinFunc unit tests', () => {
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
        mfunc.min(numThree, numTen, numTwenty, numThirty, numFourty, numFifty),
      ).to.equal(numThree);
    });
  });

  describe('Minimum Value', () => {
    it('should return 10', () => {
      expect(
        mfunc.min(numTen, numTwenty, numThirty, numFourty, numFifty),
      ).to.eqls(numTen);
    });
  });

  describe('Minimum Value function', () => {
    it('should return 1 as the minimum values', () => {
      expect(mfunc.min(...numArray)).to.equal(numOne);
    });
  });

  describe('Minimum Value undefined', () => {
    it('should return undefined, when no argument is passed', () => {
      expect(mfunc.min()).to.be.undefined;
    });
  });

  describe('Minimum Value null', () => {
    it('should not be null', () => {
      expect(mfunc.min()).not.to.be.null;
    });
  });
});

describe('Subfunc unit tests', () => {
  let numOne = 1;
  let numTwo = 2;
  let numThree = 3;
  let numFour = 4;
  let numFive = 5;
  let numArray = [numOne, numTwo, numThree, numFour, numFive];
  describe('sub', () => {
    it('should return the difference of 2 passing 4 and 2 as arguments', () => {
      expect(mfunc.sub(numFour, numTwo)).to.equals(2);
    });
  });

  describe('sub', () => {
    it('should return a number', () => {
      expect(mfunc.sub(numTwo, numOne)).to.be.a('number');
    });
  });
  describe('sub', () => {
    it('should not return an array', () => {
      expect(mfunc.sub(...numArray)).not.to.be.an('array');
    });
  });
  describe('sub function', () => {
    it('should not return undefine', () => {
      expect(mfunc.sub()).not.be.undefined;
    });
  });
  describe('sub function', () => {
    it('should not return null', () => {
      expect(mfunc.sub()).not.to.null;
    });
  });
});
