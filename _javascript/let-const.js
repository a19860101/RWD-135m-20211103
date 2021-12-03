let a = 100;
a =999;

console.log(a);

// const b = 999;
// b = 100;

const b = ['apple','banana'];
b.push('cat');
// b = [];
console.log(b);

const c = {
    name:'john'
}
c.mail = 'asdf@gmail.com'

console.log(c);

const d = ()=>{
    return 100;
}


// function & arrow function
// this
const obj = {
    name:'john',
    active: function(){
        return this;
    },
    active2: () => {
        return this;
    },
}

console.log(obj.active());
console.log(obj.active2());
