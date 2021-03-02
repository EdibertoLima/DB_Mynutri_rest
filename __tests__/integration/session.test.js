const request = require('supertest');

describe('Authentication',()=>{
    it('som two munbers',()=>{
        const a = 1;
        const b = 2;

        const sum = a+b;

        expect(sum).toBe(3);
    });
});