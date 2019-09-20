/**************************************************************
	@AUTHOR: Kingsley Nnaji <kingsley.nnaji@gmail.com>
	@LICENSE: MIT
	Creation Date : 03.09.2019
***************************************************************/

const sum = require('../addfunc');
const chai = require('chai');
const expect = chai.expect;

describe('Addition function unit tests', () => {
  let numOne = 1;
  let numTwo = 2;
  let numThree = 3;
  let numFour = 4;
  let numFive = 5;
  let numArray = [numOne, numTwo, numThree, numFour, numFive];

  describe('addx section', () => {
    it('should return the total of 15 when given numArray', () => {
      expect(sum.addx(numArray)).to.equals(15);
    });
  });

  describe('addx', () => {
    it('should take an input of an Array but not a number', () => {
      expect(sum.add(numArray)).not.to.be.a('number');
    });
  });

  describe('addx', () => {
    it('should not return an array', () => {
      expect(sum.addx(numArray)).to.be.a('number');
    });
  });

  describe('addx function', () => {
    it('should not be undefined define', () => {
      expect(sum.addx(numArray)).not.be.undefined;
    });
  });

  describe('addx function', () => {
    it('should not be null', () => {
      expect(sum.addx(numArray)).not.to.null;
    });
  });

  describe('add function test section', () => {
    it('should not be a string', () => {
      expect(sum.add(...numArray)).not.to.be.a('string');
    });
  });

  describe('add function', () => {
    it('should not return null', () => {
      expect(sum.add()).not.to.null;
    });
  });
});
