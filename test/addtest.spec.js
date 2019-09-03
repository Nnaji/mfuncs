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
    describe('add', () => {
        it('should return the difference of 2 passing 4 and 2 as arguments', () => {
            expect(addfunc.add(numFour, numTwo)).to.equals(2);
        });
    });

    describe('add', () => {
        it('should return a number', () => {
            expect(addfunc.add(numTwo, numOne)).to.be.a('number');
        });
    });
    describe('add', () => {
        it('should not return an array', () => {
            expect(addfunc.add(...numArray)).not.to.be.an('array');
        });
    });
    describe('add function', () => {
        it('should not return undefine', () => {
            expect(addfunc.add()).not.be.undefined;
        });
    });
    describe('add function', () => {
        it('should not return null', () => {
            expect(addfunc.add()).not.to.null;
        });
    });

});

