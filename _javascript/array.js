// let a = new Array();
// a[0] = 'Apple';
// a[1] = 'Banana';
// a[2] = 'Cat';

// let a = new Array('Apple','Banana','Cat');

let a = ['Apple','Banana','Cat','Dog','Egg','Fork'];

// console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);

// console.log(a.length);

// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }

// for(let data in a){
    // console.log(data);
    // console.log(a[data]);
// }

// for(let data of a){
//     console.log(data);
// }

//push(),pop()
a.push('test');
a.pop();

//unshift(),shift()
a.unshift('test2');
a.shift();

//toString(),join() 陣列轉字串
// let str = a.toString();
let str = a.join(',');
console.log(str);

//split() 字串轉陣列
let title = 'HELLO_JAVASCRIPT';
let ary = title.split('_');
console.log(ary);
console.log(a);

//indexOf()

console.log(a.indexOf('egg'))

// splice()拼接

// a.splice(1,1,'蘋果');
a.splice(3,1);
console.log(a);