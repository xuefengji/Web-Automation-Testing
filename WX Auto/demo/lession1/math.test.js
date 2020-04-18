const math = require('./math.js');
const {add,minus,multi} = math;

describe('测试',()=>{

    beforeAll(()=>{
        console.log('外层beforeAll');
    })

    describe('加法',()=>{
        beforeAll(()=>{
            console.log('内层beforeAll1');
        })
        test('测试加法',() => {
            expect(add(3,3)).toBe(6);
        })
        afterAll(()=>{
            console.log('内层afterAll1');
        })
    })
    
    describe('减法',()=>{
        beforeAll(()=>{
            console.log('内层beforeAll2');
        })
        test('测试减法',() => {
            expect(minus(3,2)).toBe(1);
        })
        afterAll(()=>{
            console.log('内层afterAll2');
        })
    })

    afterAll(()=>{
       console.log('外层afterAll');
        
    })
}
)