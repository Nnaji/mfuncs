/**************************************************************
	@AUTHOR: Kingsley Nnaji <kingsley.nnaji@gmail.com>
	@LICENSE: MIT
	Creation Date : 03.09.2019
***************************************************************/

const addfunc = require('../src/scripts/js/addfunc');
const chai = require('chai');
const expect = chai.expect;

describe('addfunc unit tests', () => {
  let numOne = 1;
  let numTwo = 2;
  let numThree = 3;
  let numFour = 4;
  let numFive = 5;
  let numArray = [numOne, numTwo, numThree, numFour, numFive];

  describe('addx section', () => {
    it('should return the total of 15 when given numArray', () => {
      expect(addfunc.addx(numArray)).to.equals(15);
    });
  });

  describe('addx', () => {
    it('should take an input of an Array but not a number', () => {
      expect(addfunc.add(numArray)).not.to.be.a('number');
    });
  });

  describe('addx', () => {
    it('should not return an array', () => {
      expect(addfunc.addx(numArray)).to.be.a('number');
    });
  });

  describe('addx function', () => {
    it('should not be undefined define', () => {
      expect(addfunc.addx(numArray)).not.be.undefined;
    });
  });

  describe('addx function', () => {
    it('should not be null', () => {
      expect(addfunc.addx(numArray)).not.to.null;
    });
  });

  describe('add function test section', () => {
    it('should not be a string', () => {
      expect(addfunc.add(...numArray)).not.to.be.a('string');
    });
  });

  describe('add function', () => {
    it('should not return null', () => {
      expect(addfunc.add()).not.to.null;
    });
  });
});
