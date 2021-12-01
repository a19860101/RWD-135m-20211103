// let obj = new Object();
// obj.name = 'John';
// obj.mail = 'asdf@gmail.com';
// obj.active = function(){
//     return 100;
// }

// let obj = {
//     name: 'John',
//     mail: 'asdf@gmail.com',
//     active: function(){
//         return 100;
//     }
// }
let drinks = [
    {
        name:'紅茶',
        price: 30
    },
    {
        name:'綠茶',
        price: 30
    },
    {
        name:'奶茶',
        price:35
    },
    {
        name:'珍珠奶茶',
        price: 50
    }
];
// console.log(drinks);
for(let drink of drinks){
    console.log(drink.name);
    console.log(drink.price);
}