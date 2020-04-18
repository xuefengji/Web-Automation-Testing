const math = require('./math.js');
const {add,minus,multi} = math;

test('测试加法',() => {
    expect(add(3,3)).toBe(6);
})


test('测试减法', () => {
    expect(minus(3,2)).toBe(1);
})