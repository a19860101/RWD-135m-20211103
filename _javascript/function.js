
// console.log(total());

//函式陳述式 function statement (提升性)
// function test(){
//     alert('hello test');
// }

// function total(){
//     let x = 100;
//     let y = 60;
//     return x + y;
// }

// 函式表達式 function expression
// let square = function(){
//     let w = 100;
//     let h = 50;
//     return w * h;
// }

// console.log(square());


function square(x){
    return x * x;
}

// console.log(square(37));

// function total(price,tax){
//     return price * tax;
// }

let total = function(price,tax){
    return price * tax;
}
console.log(total(999,1.1));