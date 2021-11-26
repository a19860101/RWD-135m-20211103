// 運算子(符,元)

let x = 10;
let y = 6;

let a = '100';
let b = 100;
// 算術運算子
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// 比較運算子
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);
console.log(x == y);
console.log(x === y);
console.log(x != y);

console.log(a == b);
console.log(a === b);//值與資料型別皆須相等

// 指定運算子
// console.log(x = y);
// console.log(x += y); // x = x + y
// console.log(x -= y); // x = x - y
// console.log(x *= y); // x = x * y
// console.log(x /= y); // x = x / y
// console.log(x %= y); // x = x % y


// 邏輯運算子
// AND OR NOT
console.log( x>0 && y<0);
console.log( x>0 || y<0);
console.log(!x);

// 字串運算子

let user = 'Mary';

console.log(user + '你好');

console.log(a + b);

// 字串樣板

console.log(`${user}你好`);

console.log(`目前共有${x}筆資料`);
console.log('目前共有' + x + '筆資料');

// 三元運算子

// console.log( x > 0 ? 'success':'error');
console.log( x < 0 ? 'success': x > 0 ? 'success2':'error');