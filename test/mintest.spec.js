const minFunc = require('../src/scripts/js/minfunc');
const chai = require('chai');
const expect = chai.expect;

describe('MinFunc unit tests', () => {
    let numOne = 1;
    let numTwo = 2;
    let numThree = 3;
    let numTen = 10;
    let numTwenty = 20;
    let numThirty = 30;
    let numFourty = 40;
    let numFifty = 50;
    let numArray = [numOne, numTwo, numThree, numTen, numTwenty, numThirty, numFourty, numFifty];
    describe('Minimum Value Test', () => {
        it('should return 3 as the minimum Value', () => {
            expect(minFunc.min(numThree, numTen, numTwenty, numThirty, numFourty, numFifty)).to.equal(numThree);
        });
    });

    describe('Minimum Value', () => {
        it('should return 10', () => {
            expect(minFunc.min(numTen, numTwenty, numThirty, numFourty, numFifty)).to.eqls(numTen);
        });
    });

    describe('Minimum Value function', () => {
        it('should return 1 as the minimum values', () => {
            expect(minFunc.min(...numArray)).to.equal(numOne);
        });
    });

    describe('Minimum Value undefined', () => {
        it('should return undefined, when no argument is passed', () => {
            expect(minFunc.min()).to.be.undefined;
        });
    });

    describe('Minimum Value null', () => {
        it('should not be null', () => {
            expect(minFunc.min()).not.to.be.null;
        });
    });
});