import { expect } from 'chai'; 

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

describe('Calculator Tests', () => {
    it('add(5, 2) should return 7', () => {
        const result = add(5, 2);
        expect(result).to.equal(7); 
    });

    it('add(5, 2) should return 8 (FAIL)', () => {
        const result = add(5, 2);
        expect(result).to.equal(8); 
    });

    it('sub(5, 2) should return 3', () => {
        const result = sub(5, 2);
        expect(result).to.equal(3); 
    });

    it('sub(5, 2) should return 5 (FAIL)', () => {
        const result = sub(5, 2);
        expect(result).to.equal(5); 
    });

    it('mul(5, 2) should return 10', () => {
        const result = mul(5, 2);
        expect(result).to.equal(10); 
    });

    it('mul(5, 2) should return 12 (FAIL)', () => {
        const result = mul(5, 2);
        expect(result).to.equal(12); 
    });

    it('div(10, 2) should return 5', () => {
        const result = div(10, 2);
        expect(result).to.equal(5); 
    });

    it('div(10, 2) should return 2 (FAIL)', () => {
        const result = div(10, 2);
        expect(result).to.equal(2); 
    });
});
