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
    // console.log(drink.name);
    // console.log(drink.price);
}
let drinks_name = drinks.map(function(data){
    return data.name;
})
console.log(drinks_name);
// let drinks_price = drinks.map(function(data){
//     return data.price
// })
let drinks_price = drinks.map(data => data.price);
console.log(drinks_price);

let drinks_30 = drinks
                .filter(data => data.price > 30)
                .map(data => data.name);


let total = drinks_price.reduce((a,b) => a + b);
console.log(total);