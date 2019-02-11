const difffunc = require('../src/scripts/js/subfunc');
const chai = require('chai');
const expect = chai.expect;

describe('Subfunc unit tests', () => {
    let numOne = 1;
    let numTwo = 2;
    let numThree = 3;
    let numFour = 4;
    let numFive = 5;
    let numArray = [numOne, numTwo, numThree, numFour, numFive];
    describe('sub', () => {
        it('should return the difference of 2 passing 4 and 2 as arguments', () => {
            expect(difffunc.sub(numFour, numTwo)).to.equals(2);
        });
    });

    describe('sub', () => {
        it('should return a number', () => {
            expect(difffunc.sub(numTwo, numOne)).to.be.a('number');
        });
    });
    describe('sub', () => {
        it('should not return an array', () => {
            expect(difffunc.sub(...numArray)).not.to.be.an('array');
        });
    });
    describe('sub function', () => {
        it('should not return undefine', () => {
            expect(difffunc.sub()).not.be.undefined;
        });
    });
    describe('sub function', () => {
        it('should not return null', () => {
            expect(difffunc.sub()).not.to.null;
        });
    });

});