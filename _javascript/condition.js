// 判斷式
let x = 0;

// if()

if(x > 0){
    console.log('success');
}

// if...else

if(x > 0){
    console.log('success2');
}else{
    console.log('error');
}


// if...else if

if(x > 0){
    console.log('大於零')
}else if(x < 0){
    console.log('小於零')
}

// if...else if...else
if(x > 0){
    console.log('大於零')
}else if(x < 0){
    console.log('小於零')
}else{
    console.log('error2')
}

let score = 6;

let result = score >= 60 ? '及格':'不及格';

// let result;
// if(score >= 60){
//     result = '及格';
// }else{
//     result = '不及格';
// }

console.log(result);

//switch
let s = 0;
switch(s){
    case 0:
        console.log(0);
        break;
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}

switch(s){
    case 0:
    case 1:
        console.log('test');
        break;
    default:
        console.log('error')
}

switch(true){
    case s>0:
        console.log('正數');
        break;
    case s<0:
        console.log('負數');
        break;
    case s == 0:
        console.log('零');
        break;
    default:
        consoele.log('error!!');
}

