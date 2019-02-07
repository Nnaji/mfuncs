const addfunc = require('../src/scripts/js/addfunc');
const chai = require('chai');
const expect = chai.expect;

describe('Addfunc unit tests', () => {
    let numOne = 1;
    let numTwo = 2;
    let numThree = 3;
    let numArray = [numOne, numTwo, numThree];
    describe('add', () => {
        it('should return the total of 6 when give 3 and 3 as an argument', () => {
            expect(addfunc.add(numThree, numThree)).to.equals(6);
        });
    });

    describe('add', () => {
        it('should only the sum of two arguments if morethan 2 arguments is passed', () => {
            expect(addfunc.add(numOne, numTwo, numThree)).to.eqls(3);
        });
    });

    describe('addn function', () => {
        it('should return the total value of 6 with ....spread of array values', () => {
            expect(addfunc.addn(...numArray)).to.equal(6);
        });
    });

    describe('addn function', () => {
        it('should return the sum of 6 with three arguments 1, 2, 3 passed', () => {
            expect(addfunc.addn(numOne, numTwo, numThree)).to.equal(6);
        });
    });

    describe('addn function', () => {
        it('should return value 0 if no arguments is passed', () => {
            expect(addfunc.addn()).to.equal(0);
        });
    });

    describe('addn function', () => {
        it('should return the same value if a single value is passed argument', () => {
            expect(addfunc.addn(numArray[0])).to.equal(1);
        });
    });

});